import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerGameData } from '../../model';
import { Router } from '@angular/router';

@Component({
  selector: 'project-majeur-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css'],
})
export class CardGameComponent implements OnInit {
  @Output() deleteGameById = new EventEmitter<number>();
  @Input() isEdition = false;
  @Input() game: PlayerGameData = {
    id: 'pending...',
    picture: 'pending...',
    title: 'pending...',
    levelRating: 0,
  };

  rating!: number;
  selectedRating = 0;

  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star',
    },
  ];

  constructor(private router: Router) {}

  selectStar(value: number): void {
    this.stars.filter((star) => {
      if (star.id <= value) {
        star.class = 'star-gold star';
      } else {
        star.class = 'star-gray star';
      }

      return star;
    });
    this.selectedRating = value;
  }

  deleteGame(): void {
    if (this.isEdition) this.deleteGameById.emit(+this.game.id);
  }

  goToGame = () => {
    this.router.navigate([`games/${this.game.id}`]);
  };

  ngOnInit(): void {
    this.selectStar(this.game.levelRating);
  }
}
