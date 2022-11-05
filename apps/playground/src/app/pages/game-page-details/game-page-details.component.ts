/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';
import { GameType } from '../../types';

@Component({
  selector: 'project-majeur-game-page-details',
  templateUrl: './game-page-details.component.html',
  styleUrls: ['./game-page-details.component.css'],
})
export class GamePageDetailsComponent implements OnInit {
  id: number | null = null;
  gameById: GameType | null = null;

  constructor(private route: ActivatedRoute, private ts: GameService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { id } = params;
      this.id = id;
      this.getGameById(id);
    });
  }

  getGameById = (id: string) => {
    this.ts.getGameById({ id }).subscribe((res) => {
      this.gameById = res;
    });
  };
}
