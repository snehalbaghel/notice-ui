import { getModule, Module, MutationAction, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import store from '..';
import { loginUser, setJWT, logoutUser, clearJWT, postNewUser } from '../api';
import { User, AuthCredentials, AuthResponse, SignUpPayload } from '../models';

@Module({
  namespaced: true,
  name: 'auth',
  store,
  dynamic: true,
})
class AuthModule extends VuexModule {

  public user: User | null = null;
  public error: string | null = null;

  get username() {
    return (this.user && this.user.username) || null;
  }

  get errorMessage() {
    return this.error || null;
  }

  @Mutation
  public setUser(user: User) {
    this.user = user;
    // return { user };
  }

  @Mutation
  public setAuthResponse(response: AuthResponse) {
    this.error = null;

    if (response.status !== 'success') {
      this.error = response.message;
    } else {
      this.user = response.user as User;
    }

  }

  @Action({ commit: 'setAuthResponse' })
  public async loginUser(credentials: AuthCredentials) {

    const response: AuthResponse = await loginUser(credentials);
    const user = response.user as User;
    const token  = response.Authorization;

    if (token) {
      setJWT(token);
      localStorage.setItem('access_token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }

    return response;

  }

  @Action({ commit: 'setAuthResponse' })
  public async signUpUser(payload: SignUpPayload) {

    const response: AuthResponse = await postNewUser(payload);
    const user = response.user as User;
    const token = response.Authorization;

    if (token) {
      setJWT(token);
      localStorage.setItem('access_token', token);
      localStorage.setItem('user', JSON.stringify(user));
    }

    return response;

  }

  @MutationAction
  public async logoutUser() {
    const response: AuthResponse = await logoutUser();
    const user = response.user as User;

    if (response.status === 'success') {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      clearJWT();
    }

    return { user };
  }

}

export default getModule(AuthModule);
