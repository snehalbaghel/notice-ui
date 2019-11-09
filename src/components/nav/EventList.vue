<template>
  <v-list three-line class="grey lighten-4 fill-height">
      <v-subheader>{{ role === 'add' ? 'Saved Events' : 'Published Events' }}</v-subheader>
      <template v-for="(event, index) in events">
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
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { Event } from '../../store/models';

  @Component
  export default class EventList extends Vue {

    @Prop() private role: string | undefined;

    private events: Event[] | undefined = [
      {
        title: 'Title',
        subtitle: 'Subtitle',
        description: 'Description',
        venue: 'wasup',
        time: '10 Sep 2019',
        link: '1039',
      },
      {
        title: 'Test',
        subtitle: 'None',
        description: 'Description',
        venue: 'wasup',
        time: 'sup',
        link: '1039',
      },
      {
        title: 'Test',
        subtitle: 'None',
        description: 'Description',
        venue: 'wasup',
        time: 'sup',
        link: '1039',
      },
      {
        title: 'Test',
        subtitle: 'None',
        description: 'Description',
        venue: 'wasup',
        time: 'sup',
        link: '1039',
      },
    ];
  
    private eventClicked() {
      // console.log('Event clicked');
    }
  }
</script>