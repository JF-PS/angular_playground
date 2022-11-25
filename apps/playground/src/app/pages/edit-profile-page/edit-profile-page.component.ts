import { Component, OnInit } from '@angular/core';
import { ProfileData } from '../../model';
import { UserService, UserCloudService } from '../../services';
import { take } from 'rxjs';

@Component({
  selector: 'project-majeur-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css'],
})
export class EditProfilePageComponent implements OnInit {
  currentUser: ProfileData | undefined = undefined;

  constructor(
    private readonly userService: UserService,
    private readonly userCloudService: UserCloudService
  ) {}

  ngOnInit(): void {
    this.userService.profile$.subscribe((res) => {
      this.currentUser = res;
    });
  }

  handleSubmit = (data: ProfileData) => {
    console.log(data);
    this.userCloudService
      .updateUser(data)
      .pipe(take(1))
      .subscribe(() => {
        // if (res) {
        //   console.log(res);
        // } else {
        //   console.error('Errors occured');
        // }
      });
  };
}
