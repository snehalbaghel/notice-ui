import { getModule, Module, MutationAction, VuexModule, Mutation } from 'vuex-module-decorators';
import store from '..';
import { fetchPublishedEvents, fetchSavedEvents } from '../api';
import { Event } from '../models';

@Module({
  namespaced: true,
  name: 'event',
  store,
  dynamic: true,
})
class EventModule extends VuexModule {

  public events: Event[] | null = null;
  public savedEvents: Event[] | null = null;

  @MutationAction
  public async fetchSEvents() {
    const savedEvents: Event[] = await fetchSavedEvents();

    return { savedEvents };

  }

  @MutationAction
  public async getPublishedEvents() {
    const events: Event[] = await fetchPublishedEvents();

    return { events };
  }
}

export default getModule(EventModule);
