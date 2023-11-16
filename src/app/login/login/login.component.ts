import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMsg!: string;
  /**
   * Injecting AuthService and Router
   */
  constructor(private auth: AuthService, private route: Router) {}

  login() {
    //Checking credentials for username and password
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Password is required';
    } else {
      this.errorMsg = '';
      let res = this.auth.login(this.username, this.password);
      //temporarily using service data response as db is not using
      if (res === 200) {
        this.route.navigate(['home']);
      }
      if (res === 403) {
        this.errorMsg = 'Invalid Credentials';
      }
    }
  }
}
