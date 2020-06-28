import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showAlert: boolean;
  public userDetails: User;
  public username: string;
  public password: string;

  constructor(public httpService: HttpService, public router: Router) { 
    this.username = "";
    this.password = "";
  }

  ngOnInit() {
  }

  public loginUser(): void {
    this.showAlert = false;
    let user: User = {};
    user.username = this.username;
    user.password = this.password;
    this.httpService.login(user).subscribe((userData: User) => {
      if (!isNullOrUndefined(userData["errorBean"])) {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      } else {
        this.userDetails = userData;
        sessionStorage.setItem("user-details", JSON.stringify(this.userDetails));
        this.router.navigateByUrl("/dashboard")
      }
    });
    
  }

}
