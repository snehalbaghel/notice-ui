import { getModule, Module, MutationAction, VuexModule, Mutation } from 'vuex-module-decorators';
import store from '..';
import { fetchApprovedEvents } from '../api';
import { Event } from '../models';

@Module({
  namespaced: true,
  name: 'event',
  store,
  dynamic: true,
})
class EventModule extends VuexModule {

  public events: Event[] | null = null;

  // @MutationAction
  // public async getApprovedEvents() {
    // const response: Event[] = await fetchApprovedEvents();
  // }
}
