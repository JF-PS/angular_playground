/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameType } from '../../types';

@Component({
  selector: 'project-majeur-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent {
  @Input() gameList: GameType[];
  @Input() limit: number | null = null;


  constructor() {
    this.gameList = [];
  }
}

