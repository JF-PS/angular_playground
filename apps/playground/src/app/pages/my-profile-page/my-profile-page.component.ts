import { Component } from '@angular/core';
import { ProfileData } from '../../model';
import { Observable } from 'rxjs';
import { UserService } from '../../services';

@Component({
  selector: 'project-majeur-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css'],
})
export class MyProfilePageComponent {
  profile$: Observable<ProfileData | undefined> = this.userService.profile$;
  constructor(private readonly userService: UserService) {}
}
