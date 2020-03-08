import { UserService } from './service/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../app/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
 

 
  constructor(public auth: AuthService, ) {
  }
}
