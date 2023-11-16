import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  /**
   *Header constructor
   */
  constructor(private router: Router) {}
  logOut() {
    this.router.navigate(['']);
  }
  goToHome() {
    this.router.navigate(['']);
  }
}
