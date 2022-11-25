import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { from, Observable, switchMap, take } from 'rxjs';
import { UserService } from '../services';
import { ProfileData } from '../model';

@Injectable({
  providedIn: 'root',
})
class FireStoreService {
  constructor(
    private readonly afs: AngularFirestore,
    private readonly userService: UserService
  ) {}

  //   addUser(profile: ProfileData): Observable<DocumentReference<ProfileData>> {
  //     return this.userService.user$.pipe(
  //       switchMap((user) => {
  //         return from(this.afs.collection<ProfileData>('user').add(profile));
  //       }),
  //       take(1)
  //     );
  //   }

  //   addFavorite(excuse: Excuse): Observable<DocumentReference<Excuse>> {
  //     return this.userService.user$.pipe(
  //       switchMap((user) => {
  //         return from(
  //           this.afs
  //             .collection<Excuse>(`favorites/${user?.uid}/excuses`)
  //             .add(excuse)
  //         );
  //       }),
  //       take(1)
  //     );
  //   }

  //   getFavorites(): Observable<Excuse[]> {
  //     return this.userService.user$.pipe(
  //       switchMap((user) => {
  //         return this.afs
  //           .collection<Excuse>(`favorites/${user?.uid}/excuses`)
  //           .valueChanges();
  //       })
  //     );
  //   }
}

export default FireStoreService;
