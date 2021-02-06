import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserToken } from '../models/user-token.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, AfterViewChecked {
  constructor(private auth: AuthService, private router: Router) {}

  loggedInUser: IUserToken;

  ngOnInit(): void {}
  ngAfterViewChecked(): void {
    this.loggedInUser = this.auth.getLoggedInUser();
  }

  logUserOut() {
    this.auth.logOutUser();
    this.router.navigate(['/login']);
  }
}
