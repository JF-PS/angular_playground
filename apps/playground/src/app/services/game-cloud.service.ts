import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, switchMap, take } from 'rxjs';
import { UserService } from '../services';
import { PlayerGameData, UserGameData, ProfileData } from '../model';

@Injectable({
  providedIn: 'root',
})
class GameCloudService {
  constructor(
    private readonly afs: AngularFirestore,
    private readonly userService: UserService
  ) {}

  createGame(playerGameData: PlayerGameData) {
    this.afs
      .doc<PlayerGameData>(`game/${playerGameData?.id}`)
      .set(playerGameData);
  }

  AddPlayerToUsersCollection(
    gameId: string,
    profileData: ProfileData | undefined
  ): Observable<void> {
    return from(
      this.afs.doc<UserGameData>(`game/${gameId}/users`).set({
        picture: '',
        login: profileData?.login === undefined ? '' : profileData?.login,
      })
    );
  }

  createOrUpdateGame(playerGameData: PlayerGameData): Observable<void> {
    return this.userService.profile$.pipe(
      switchMap((profile) => {
        this.createGame(playerGameData);
        return this.AddPlayerToUsersCollection(playerGameData?.id, profile);
      }),
      take(1)
    );
  }

  //   updateUser(data: ProfileData): Observable<void> {
  //     return this.userService.user$.pipe(
  //       switchMap((user) => {
  //         return this.afs
  //           .doc<ProfileData>(`user/${user?.uid}`)
  //           .update({ ...data });
  //       })
  //     );
  //   }
}

export default GameCloudService;
