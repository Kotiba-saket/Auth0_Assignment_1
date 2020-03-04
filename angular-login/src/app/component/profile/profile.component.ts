import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: any;
idToke = localStorage.getItem('id_token');
  constructor(private auth: AuthService){}

  ngOnInit() {
   
    this.profile = this.getDecodedAccessToken(this.idToke);
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

}
