import { getModule, Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '..';
import { fetchPublishedEvents, fetchSavedEvents, fetchTags} from '../api';
import { Event, Tag } from '../models';

@Module({
  namespaced: true,
  name: 'event',
  store,
  dynamic: true,
})
class EventModule extends VuexModule {

  public events: Event[] | null = null;
  public savedEvents: Event[] | null = null;
  public tags: Tag[] | null = null;

  @MutationAction
  public async fetchSEvents() {
    const savedEvents: Event[] = await fetchSavedEvents();

    return { savedEvents };

  }

  @MutationAction
  public async fetchPublishedEvents() {
    const events: Event[] = await fetchPublishedEvents();

    return { events };
  }

  @MutationAction
  public async fetchTags() {
    const tags: Tag[] = await fetchTags();

    return { tags };
  }
}

export default getModule(EventModule);
