import { Component, OnInit } from '@angular/core';
import { ProfilePageModel } from '../../model';
import { Observable } from 'rxjs';
import { EditProfilePageService } from './edit-profile-page.service';

@Component({
  selector: 'project-majeur-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css'],
})
export class EditProfilePageComponent implements OnInit {
  profile$: Observable<ProfilePageModel | null> = this.profilePageService.get();
  constructor(private readonly profilePageService: EditProfilePageService) {}

  ngOnInit(): void {
    console.log(this.profile$);
    this.profile$.subscribe((res) => {
      console.log(res);
    });
  }
}
