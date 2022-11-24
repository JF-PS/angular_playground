import { Component, OnInit } from '@angular/core';
import { ProfilePageModel } from '../../model';
import { Observable } from 'rxjs';
import { ProfilePageService } from './profile-page.service';
import { UserService } from '../../services';

@Component({
  selector: 'project-majeur-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css'],
})
export class MyProfilePageComponent implements OnInit {
  profile$: Observable<ProfilePageModel | null> = this.profilePageService.get();
  constructor(
    private readonly profilePageService: ProfilePageService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(console.log);
  }
}
