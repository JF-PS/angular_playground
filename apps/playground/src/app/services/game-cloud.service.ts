import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, switchMap, take } from 'rxjs';
import { UserService } from '../services';
import { GameData, PlayerGameData, UserGameData, ProfileData } from '../model';

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
  createGame(gameData: GameData) {
    this.afs.doc<GameData>(`game/${gameData?.id}`).set(gameData);
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
    gameData: GameData,
    profileData: ProfileData | undefined,
    levelRating: number
  ): Observable<void> {
    return this.userService.user$.pipe(
      switchMap((user) => {
        if (user)
          this.AddGameToUserLogin({ ...gameData, levelRating }, user.uid);
        return from(
          this.afs
            .doc<UserGameData>(`game/${gameData?.id}/users/${user?.uid}`)
            .set({
              id: `${user?.uid}`,
              login: `${user?.email}`,
              levelRating,
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
  createOrUpdateGame(
    GameData: GameData,
    levelRating: number
  ): Observable<void> {
    return this.userService.profile$.pipe(
      switchMap((profile) => {
        this.createGame(GameData);
        return this.AddUserLoginToGame(GameData, profile, levelRating);
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

  removeFavoriteUserGame(gameId: number): Observable<unknown> {
    return this.userService.user$.pipe(
      switchMap((user) => {
        this.afs.doc(`user/${user?.uid}/games/${gameId}`).delete();
        return this.afs.doc(`game/${gameId}/users/${user?.uid}`).delete();
      }),
      take(1)
    );
  }
}

export default GameCloudService;
