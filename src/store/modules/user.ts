import { getModule, Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import store from '../../store';
import { loginUser, setJWT } from '../api';
import { User, AuthCredentials, AuthResponse } from '../models';

@Module({
  namespaced: true,
  name: 'user',
  store,
  dynamic: true,
})
class UserModule extends VuexModule {

  public user: User | undefined;

  get username() {
    return (this.user && this.user.username) || null;
  }

  @MutationAction({ mutate: ['user'] })
  public async loginUser(credentials: AuthCredentials) {

    const response: AuthResponse = await loginUser(credentials);
    const user = response.user as User;

    if (response.Authorization) {
      setJWT(response.Authorization);
    }

    return { user };
  }
}

export default getModule(UserModule);
