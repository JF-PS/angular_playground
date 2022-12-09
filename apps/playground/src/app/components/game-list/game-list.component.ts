/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { GameType } from '../../types';

@Component({
  selector: 'project-majeur-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameListComponent {
  @Input() gameList: GameType[];
  private limit = 4;

  get gameSliceListMobile() {
    return this.gameList.slice(0, this.limit)
  }

  get gameSliceListDesktop() {
    return this.gameList.slice(0, (this.limit + 4))
  }

  constructor() {
    this.gameList = [];
  }

  seeMore() {
    this.limit += 4;
  }
}
