/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameType } from '../../types';

@Component({
  selector: 'project-majeur-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  allGames: GameType[] = [];

  constructor(private ts: GameService) {}

  // When loading the component,
  // we call the list of technos.
  ngOnInit(): void {
    this.getGames();
  }

  getGames = () => {
    this.ts.getGameList().subscribe((res) => {
      this.allGames = res;
    });
  };
}

