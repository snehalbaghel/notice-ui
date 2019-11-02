import { getModule, Module, MutationAction, VuexModule, Mutation } from 'vuex-module-decorators';
import store from '..';
import { loginUser, setJWT, logoutUser, clearJWT } from '../api';
import { User, AuthCredentials, AuthResponse } from '../models';

@Module({
  namespaced: true,
  name: 'auth',
  store,
  dynamic: true,
})
class AuthModule extends VuexModule {

  public user: User | null = null;

  get username() {
    return (this.user && this.user.username) || null;
  }

  @Mutation
  public setUser(user: User) {
    this.user = user;
    // return { user };
  }

  @MutationAction
  public async loginUser(credentials: AuthCredentials) {

    const response: AuthResponse = await loginUser(credentials);
    const user = response.user as User;
    const token  = response.Authorization;

    if (token) {
      setJWT(token);
      localStorage.setItem('access_token', token);
      localStorage.setItem('user', JSON.stringify(user) );
    }

    return { user };
  }

  @MutationAction
  public async logoutUser() {
    const response: AuthResponse = await logoutUser();
    const user = response.user;

    if (response.status === 'success') {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      clearJWT();
    }

    return { user };
  }

}

export default getModule(AuthModule);
