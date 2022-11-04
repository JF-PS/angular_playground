/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { GameType } from '../types';

import { Observable, of, pipe } from 'rxjs';
import { map, filter, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const initGames: GameType[] = [
  {
    id: 540,
    title: 'Overwatch 2',
    thumbnail: 'https://www.freetogame.com/g/540/thumbnail.jpg',
    short_description:
      'A hero-focused first-person team shooter from Blizzard Entertainment.',
    game_url: 'https://www.freetogame.com/open/overwatch-2',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Activision Blizzard',
    developer: 'Blizzard Entertainment',
    release_date: '2022-10-04',
    freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
  },
  {
    id: 517,
    title: 'Lost Ark',
    thumbnail: 'https://www.freetogame.com/g/517/thumbnail.jpg',
    short_description:
      'Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.',
    game_url: 'https://www.freetogame.com/open/lost-ark',
    genre: 'ARPG',
    platform: 'PC (Windows)',
    publisher: 'Amazon Games',
    developer: 'Smilegate RPG',
    release_date: '2022-02-11',
    freetogame_profile_url: 'https://www.freetogame.com/lost-ark',
  },
  {
    id: 528,
    title: 'Noah’s Heart',
    thumbnail: 'https://www.freetogame.com/g/528/thumbnail.jpg',
    short_description:
      'Noah’s Heart is an open-world MMORPG game with a focus on exploration and socialization.',
    game_url: 'https://www.freetogame.com/open/noahs-heart',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    publisher: 'Archosaur Games',
    developer: 'Archosaur Games',
    release_date: '2022-07-28',
    freetogame_profile_url: 'https://www.freetogame.com/noahs-heart',
  },
  {
    id: 3,
    title: 'Warframe',
    thumbnail: 'https://www.freetogame.com/g/3/thumbnail.jpg',
    short_description:
      'A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ',
    game_url: 'https://www.freetogame.com/open/warframe',
    genre: 'Shooter',
    platform: 'PC (Windows)',
    publisher: 'Digital Extremes',
    developer: 'Digital Extremes',
    release_date: '2013-03-25',
    freetogame_profile_url: 'https://www.freetogame.com/warframe',
  },
];

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: GameType[] = initGames;
  // gameList$: Observable<GameType[]> = this.games.asObservable();

  constructor(private httpClient: HttpClient) {}

  loadGames = (): Observable<GameType[]> => {
    return this.httpClient.get<GameType[]>('/api/games');
  };

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getGameList(): Observable<GameType[]> {
    return this.httpClient
      .get<GameType[]>('/api/games')
      .pipe(catchError(this.handleError<GameType[]>('getGames', [])));
  }

  getGames = () => {
    return this.games;
  };
}
