/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameType, TagType } from '../../types';
import { SortGames } from '../../enums';
import CardType from '../../types/card-type';

const { POPULARITY, RELEASE_DATE } = SortGames;

@Component({
  selector: 'project-majeur-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  
  popularGames: GameType[] = [];
  tags: TagType[] = [
    { label: 'MMORPG', path: 'mmorpg' },
    { label: 'social', path: 'social' },
    { label: 'racing', path: 'racing' },
  ];

  constructor(private ts: GameService) {}

  ngOnInit(): void {
    this.getPopularGames();
  }

  getPopularGames = () => {
    this.ts
      .getGameList(`?sort-by=${POPULARITY}&sort-by=${RELEASE_DATE}`)
      .subscribe((res) => {
        this.popularGames = res;
      });
  };
}
