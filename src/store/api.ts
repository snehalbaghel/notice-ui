import axios from 'axios';
import { Event, AuthCredentials, AuthResponse } from './models';

export const enoticeApi = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

export function setJWT(jwt: string) {
  enoticeApi.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export function clearJWT() {
  delete enoticeApi.defaults.headers.common.Authorization;
}

export async function fetchApprovedEvents(): Promise<[Event]> {
  const response = await enoticeApi.get('/event');
  return response.data;
}

export async function loginUser(credentials: AuthCredentials): Promise<AuthResponse> {
  const resp = await enoticeApi.post('/auth/login', credentials);
  return resp.data;
}

export async function logoutUser(): Promise<AuthResponse> {
  const resp = await enoticeApi.post('/auth/logout');
  return resp.data;
}
