/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { GameType, queryParamType } from '../types';
import { Observable, of, pipe } from 'rxjs';
import { map, filter, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { formatQueryParams } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private httpClient: HttpClient) {}
}
