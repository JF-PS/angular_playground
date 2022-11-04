/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { GameType } from '../../types';
import { uniqueId } from 'lodash';

@Component({
  selector: 'project-majeur-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  @Input() game: GameType;

  constructor() {
    this.game = {
      developer: '',
      freetogame_profile_url: '',
      game_url: '',
      genre: '',
      id: uniqueId(),
      platform: '',
      publisher: '',
      release_date: '',
      short_description: '',
      thumbnail: '',
      title: '',
    };
  }
}
