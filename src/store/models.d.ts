
// TODO: Inherit in all response type
// export interface Response {
//   status: string;
//   message: string;
// }

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

export interface UploadResponse {
  status: string;
  picture_id: string;
}

export interface RequestHistoryResponse {
  status: string;
  message?: string;
  current_status: string;
  timeline: {
    actor: string;
    datetime: string;
    message: string;
  } 
}

export interface SignUpPayload {
  email: string;
  password: string;
  username: string;
}

export interface PendingRequestResponse {
  request_id: string,
  title: string,
  username: string,
  event_date: string,
  request_date: string,
  current_status: string,
}
