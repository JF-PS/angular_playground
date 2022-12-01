import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, switchMap, take } from 'rxjs';
import { UserService } from '../services';
import { ProfileData } from '../model';

const initUser = {
  playStyle: 'competitive',
  description: 'Lorem ipsum ...',
  age: '10',
};

@Injectable({
  providedIn: 'root',
})
class UserCloudService {
  constructor(
    private readonly afs: AngularFirestore,
    private readonly userService: UserService
  ) {}

  createUser(): Observable<void> {
    return this.userService.user$.pipe(
      switchMap((user) => {
        return from(
          this.afs
            .collection<ProfileData>(`user`)
            .doc(user?.uid)
            .set({ login: `${user?.email}`, ...initUser })
        );
      }),
      take(1)
    );
  }

  updateUser(data: ProfileData): Observable<void> {
    return this.userService.user$.pipe(
      switchMap((user) => {
        return this.afs
          .doc<ProfileData>(`user/${user?.uid}`)
          .update({ ...data });
      })
    );
  }
}

export default UserCloudService;
