/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { UserService, AuthService } from '../../services';

@Component({
  selector: 'project-majeur-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isUserLoged = false;
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userService.profile$.subscribe((res) => {
      if (res) this.isUserLoged = true;
    });
  }

  goBack = () => {
    history.back();
  };

  logout = () => {
    this.authService.logout();
  };
}
