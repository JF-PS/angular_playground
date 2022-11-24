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
  private limit = 4;

  get gameSliceList() {
    return this.gameList.slice(0, this.limit)
  }

  constructor() {
    this.gameList = [];
  }

  seeMore() {
    this.limit += 4;
  }

}
