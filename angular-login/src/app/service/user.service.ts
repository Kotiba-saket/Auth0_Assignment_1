import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URI: string = 'https://localhost:44387/api/';
  AccessToken: string;
  userProfile: any;
  header;


  constructor(private http: HttpClient, private auth: AuthService) { }

  getString() {
    if (this.auth.AccessToken == undefined) {
      this.AccessToken = localStorage.getItem('access_token')
    } else {
      this.AccessToken = this.auth.AccessToken;
    }

    this.header = new HttpHeaders().set('Authorization', 'Bearer ' + this.AccessToken);
    return this.http.get(this.URI + 'private-scoped', {
      headers: this.header
    });
  }
}
