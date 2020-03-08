import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
dataFromBackend: any;
 
  constructor(private auth: AuthService,private userService: UserService){}

  ngOnInit() {
       this.userService.getString().subscribe(res => {
        this.dataFromBackend = res["message"];
        console.log(res);
     }, error => {
      this.dataFromBackend = "you don't have permission ! to get data from the backend."
     });

  }

}
