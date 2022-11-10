/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameType } from '../../types';
import { uniqueId } from 'lodash';

@Component({
  selector: 'project-majeur-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent {
  @Input() game: GameType;

  constructor(private router: Router) {
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

  goGameDetails(id: string | number) {
    this.router.navigate(['/games/' + id]);
  }
}
