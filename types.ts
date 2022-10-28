import { Request } from 'express';

export type UserDto = {
  username: string;
  password?: string;
}

export type User = {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
  role: string;
}

export type UserLookup = {
  [key: string]: User;
}

export enum AuthTokenType {
  BEARER = 'Bearer',
}

export type AuthToken = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: AuthTokenType;
}

// Extend the Express Type to include User
declare global {
  namespace Express {
    interface Request {
      user: User
    }
  }
}