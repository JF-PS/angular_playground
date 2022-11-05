/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameType } from '../../types';

@Component({
  selector: 'project-majeur-search-by-tag-page',
  templateUrl: './search-by-tag-page.component.html',
  styleUrls: ['./search-by-tag-page.component.css'],
})
export class SearchByTagPageComponent implements OnInit {
  gameListByTag: GameType[] = [];

  constructor(private ts: GameService) {}

  ngOnInit(): void {
    this.getGamesByTag();
  }

  getGamesByTag = () => {
    this.ts.getGameList().subscribe((res) => {
      this.gameListByTag = res;
    });
  };
}
