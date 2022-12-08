import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap } from 'rxjs';
import { ProfileData } from '../model';

@Injectable({
  providedIn: 'root',
})
class UserService {
  user$: Observable<firebase.User | null> = this.auth.user;
  profile$: Observable<ProfileData | undefined> = this.user$.pipe(
    switchMap((user) => {
      const profile = this.afs
        .doc<ProfileData>(`user/${user?.uid}`)
        .valueChanges();
      return profile;
    })
  );

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly afs: AngularFirestore
  ) {}
}

export default UserService;
