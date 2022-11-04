/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { GameType } from '../types';

import { Observable, of, pipe } from 'rxjs';
import { map, filter, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: GameType[] = [];
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
