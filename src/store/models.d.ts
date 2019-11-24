
export interface Event {
  id? : string;
  title: string;
  subtitle: string;
  description: string;
  venue: string;
  time: string;
  link: string;
  picture_id? : string; 
  tags?: string[];
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

export interface PostResponse {
  status: string;
  message: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface Tag {
  id: string;
  name: string;
  count: number;
}