/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { GameType, queryParamType } from '../types';
import { Observable, of, pipe } from 'rxjs';
import { map, filter, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { formatQueryParams } from '../utils';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private httpClient: HttpClient) {}

  getGameById(queryParams: queryParamType = ''): Observable<GameType> {
    const params = formatQueryParams(queryParams);
    return this.httpClient.get<GameType>(`${environment.apiUrl}/game${params}`);
  }

  getGamesByParams(queryParams: queryParamType = ''): Observable<GameType[]> {
    const params = formatQueryParams(queryParams);
    return this.getGameList(params);
  }

  getGameList(uri: string = ''): Observable<GameType[]> {
    return this.httpClient.get<GameType[]>(`${environment.apiUrl}/games${uri}`);
  }
}
