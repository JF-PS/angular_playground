/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { GameType } from '../types';
import { uniqueId } from 'lodash';

const initGames: GameType[] = [
  {
    id: uniqueId(),
    name: 'World of tanks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: uniqueId(),
    name: 'Lost Ark',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: uniqueId(),
    name: 'Diablo immortal',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: uniqueId(),
    name: 'Paladins',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: GameType[] = initGames;

  constructor() {}

  getGames = () => {
    return this.games;
  };
}
