import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AUTH_CONFIG } from './auth.config';
import * as auth0 from 'auth0-js';
import {ENV} from '../core/env.config'
import * as jwt_decode from "jwt-decode";
@Injectable()
export class AuthService {
  private _auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.CLIENT_ID,
    domain: AUTH_CONFIG.CLIENT_DOMAIN,
    responseType: AUTH_CONFIG.responseType,
    redirectUri: AUTH_CONFIG.REDIRECT,
    audience: AUTH_CONFIG.AUDIENCE,
    scope: AUTH_CONFIG.SCOPE
  });
  accessToken: string;
  expiresAt: number;
  AccessToken: string;
 
  constructor(private router: Router) {
     this.isAuthenticated();
  }

  login() {
    this._auth0.authorize();
  }

  handleAuth() {
    this._auth0.parseHash((err, authResult) => {

      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this._setSession(authResult);
      
        this.AccessToken = authResult.accessToken
      } else if (err) {
        console.error(`Error authenticating: ${err.error}`);
      }
      this.router.navigate(['/']);
    });
  }

  private _setSession(authResult) {
    this.expiresAt = (authResult.expiresIn * 1000) + Date.now();
    this.AccessToken = authResult.accessToken;
    localStorage.setItem('expires_at', JSON.stringify(this.expiresAt));
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
   
    sessionStorage.setItem('Auth:User_data', JSON.stringify(authResult));
  }

  private _clearExpiration() {
    localStorage.removeItem('expires_at');
    localStorage.removeItem('access_token' );
    localStorage.removeItem('id_token');
   
    sessionStorage.removeItem('Auth:User_data');
  }

  logout() {
    this._clearExpiration();
    this._auth0.logout({
      clientId: AUTH_CONFIG.CLIENT_ID,
      returnTo: ENV.BASE_URI
    });
  }

 public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
     return new Date().getTime() < expiresAt;
  }
}