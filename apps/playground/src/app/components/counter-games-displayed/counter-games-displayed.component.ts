/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameType } from '../../types';

@Component({
  selector: 'project-majeur-game-list',
  // templateUrl: './game-list.component.html',
  template: `
  <div class="content">
  <div fxLayout="row wrap" fxLayoutGap="16px grid">
    <div
      fxFlex="25%"
      fxFlex.xs="50%"
      fxFlex.sm="33%"
      *ngFor="let game of gameList.slice(0, {{ limit }})"
    >
      <project-majeur-game-details [game]="game"></project-majeur-game-details>
    </div>
    <ng-content></ng-content>
  </div>
</div>
`
  // styleUrls: ['./game-list.component.css'],
})
export class CounterGamesDisplayedComponent {
  @Input() gameList: GameType[];
  @Input() limit: number | null = null;


  constructor() {
    this.gameList = [];
  }
}

