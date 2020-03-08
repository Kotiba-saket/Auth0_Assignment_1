import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  responseType:String;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'r4gCw5vYY33PMgV2pvI7umDWlUNko7sB',
  CLIENT_DOMAIN: 'kotibasaket.auth0.com', // e.g., you.auth0.com
  AUDIENCE: 'https://quickstarts/api',
  responseType: 'token id_token', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'read:string openid profile email'
};