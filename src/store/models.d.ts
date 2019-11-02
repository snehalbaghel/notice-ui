
export interface Event {
  title: string;
  description: string;
  venue: string;
  date_time: string;
  link: string;
}

export interface User {
  email: string;
  username: string;
  public_id: string;
  admin: boolean;
}

export interface AuthResponse {
  status: string;
  message: string;
  Authorization?: string;
  user?: User
}

export interface AuthCredentials {
  email: string;
  password: string;
}