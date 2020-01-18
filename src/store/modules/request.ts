import { getModule, Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '..';
import { fetchRequestHistory, fetchPendingRequests } from '../api';
import { RequestHistoryResponse, PendingRequestResponse } from '../models';

@Module({
  namespaced: true,
  name: 'request',
  store,
  dynamic: true,
})
class RequestModule extends VuexModule {

  public requestHistory: RequestHistoryResponse | null = null;
  public pendingRequests: [PendingRequestResponse] | null = null;

  @MutationAction
  public async fetchHistory(id: string) {
    const requestHistory: RequestHistoryResponse = await fetchRequestHistory(id);

    return { requestHistory };
  }

  @MutationAction
  public async fetchPendingRequests() {
    const pendingRequests: [PendingRequestResponse] = await fetchPendingRequests();

    return { pendingRequests };
  }

}

export default getModule(RequestModule);
