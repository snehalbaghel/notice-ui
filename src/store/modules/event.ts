import { getModule, Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '..';
import { fetchPublishedEvents, fetchSavedEvents, fetchTags, fetchEvent} from '../api';
import { Event, Tag } from '../models';

@Module({
  namespaced: true,
  name: 'event',
  store,
  dynamic: true,
})
class EventModule extends VuexModule {

  public events: { [id: string]: Event; } = {};
  public savedEvents: Event[] | null = null;
  public tags: Tag[] | null = null;

  @MutationAction
  public async fetchSEvents() {
    const savedEvents: Event[] = await fetchSavedEvents();

    return { savedEvents };

  }

  @MutationAction
  public async fetchPublishedEvents() {
    const eventsAr: Event[] = await fetchPublishedEvents();

    const events = this.events || {};

    eventsAr.forEach((event) => {
      if (event.id) {
        events[event.id] = event;
      }
    });

    return { events };
  }

  @MutationAction
  public async fetchTags() {
    const tags: Tag[] = await fetchTags();

    return { tags };
  }

  @MutationAction
  public async fetchEvent(id: string) {
    const events = this.events || {};

    if (id !== '') {
      const event: Event = await fetchEvent(id);

      if (event.id) {
        events[event.id] = event;
      }
    }

    return { events };
  }
}

export default getModule(EventModule);
