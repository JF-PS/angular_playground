/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input } from '@angular/core';
import { GameType } from '../../types';

@Component({
  selector: 'project-majeur-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent {
  @Input() gameList: GameType[];

  constructor() {
    this.gameList = [];
  }
}
