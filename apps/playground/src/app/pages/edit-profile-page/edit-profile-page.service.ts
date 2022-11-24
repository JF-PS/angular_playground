/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { ProfilePageModel } from '../../model';
import { UserService, ProfileService } from '../../services';

@Injectable({
  providedIn: 'root',
})
export class EditProfilePageService {
  constructor(
    private readonly userService: UserService,
    private readonly profileService: ProfileService
  ) {}

  get(): Observable<ProfilePageModel | null> {
    return this.userService.user$.pipe(
      switchMap((user) => {
        if (!user) {
          return of(null);
        }
        return this.profileService.get(user!.uid).pipe(
          map((profile) => {
            return new ProfilePageModel(profile?.name || '', user.email || '');
          })
        );
      })
    );
  }
}
