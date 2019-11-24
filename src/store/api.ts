import axios from 'axios';
import { Event, AuthCredentials, AuthResponse, PostResponse, Tag } from './models';

export const enoticeApi = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

export function setJWT(jwt: string) {
  enoticeApi.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export function clearJWT() {
  delete enoticeApi.defaults.headers.common.Authorization;
}

export async function fetchPublishedEvents(): Promise<Event[]> {
  const response = await enoticeApi.get('/event/published');
  return response.data;
}

export async function loginUser(credentials: AuthCredentials): Promise<AuthResponse> {
  const response = await enoticeApi.post('/auth/login', credentials);
  return response.data;
}

export async function logoutUser(): Promise<AuthResponse> {
  const resp = await enoticeApi.post('/auth/logout')
                      .catch((error) =>  ({data: { status: 'success' }}));
  return resp.data;
}

export async function fetchSavedEvents(): Promise<Event[]> {
  const response = await enoticeApi.get('/user/events');
  return response.data;
}

export async function postEvent(data: Event): Promise<PostResponse> {
  const response = await enoticeApi.post('/event/', data);
  return response.data;
}

export async function fetchTags(): Promise<Tag[]> {
  const response = await enoticeApi.get('/tag/all');
  return response.data;
}
