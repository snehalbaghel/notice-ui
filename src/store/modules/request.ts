import { getModule, Module, MutationAction, VuexModule, Mutation } from 'vuex-module-decorators';
import store from '..';
import { fetchRequestHistory } from '../api';
import { RequestHistoryResponse } from '../models';

@Module({
  namespaced: true,
  name: 'request',
  store,
  dynamic: true,
})
class RequestModule extends VuexModule {

  public requestHistory: RequestHistoryResponse | null = null;

  @MutationAction
  public async fetchHistory(id: string) {
    const requestHistory: RequestHistoryResponse = await fetchRequestHistory(id);

    return { requestHistory };
  }

}

export default getModule(RequestModule);
