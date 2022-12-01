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

  /**
   * Add a Game to firestore cloud game collection.
   * @param playerGameData
   */
  createGame(playerGameData: PlayerGameData) {
    this.afs
      .doc<PlayerGameData>(`game/${playerGameData?.id}`)
      .set(playerGameData);
  }

  /**
   * Add a Game in user games collection.
   * @param playerGameData
   */
  AddGameToUserLogin(playerGameData: PlayerGameData, userId: string) {
    this.afs
      .doc<PlayerGameData>(`user/${userId}/games/${playerGameData?.id}`)
      .set(playerGameData);
  }

  /**
   * Add a User in game users collection.
   * @param gameId
   * @param profileData
   */
  AddUserLoginToGame(
    playerGameData: PlayerGameData,
    profileData: ProfileData | undefined
  ): Observable<void> {
    return this.userService.user$.pipe(
      switchMap((user) => {
        if (user) this.AddGameToUserLogin(playerGameData, user.uid);
        return from(
          this.afs
            .doc<UserGameData>(`game/${playerGameData?.id}/users/${user?.uid}`)
            .set({
              picture:
                'https://cengage.force.com/resource/1607465003000/loginIcon',
              login: `${user?.email}`,
              // profileData?.login === undefined ? '' : profileData?.login
            })
        );
      })
    );
  }

  /**
   * Add a game to games collection.
   * Add a user to the game that has just been created
   * Add a game to the games list of the connected user
   * @param playerGameData
   */
  createOrUpdateGame(playerGameData: PlayerGameData): Observable<void> {
    return this.userService.profile$.pipe(
      switchMap((profile) => {
        this.createGame(playerGameData);
        return this.AddUserLoginToGame(playerGameData, profile);
      }),
      take(1)
    );
  }

  getFavoriteGames(): Observable<PlayerGameData[]> {
    return this.userService.user$.pipe(
      switchMap((user) => {
        return this.afs
          .collection<PlayerGameData>(`user/${user?.uid}/games`)
          .valueChanges();
      }),
      take(1)
    );
  }

  getGamePlayers(gameId: string): Observable<UserGameData[]> {
    return this.afs
      .collection<UserGameData>(`game/${gameId}/users`)
      .valueChanges();
  }
}

export default GameCloudService;
