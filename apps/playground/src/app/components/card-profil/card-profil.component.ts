import { Component, Input, OnInit } from '@angular/core';
import { UserGameData } from '../../model';
import { Router } from '@angular/router';

@Component({
  selector: 'project-majeur-card-profil',
  templateUrl: './card-profil.component.html',
  styleUrls: ['./card-profil.component.css'],
})
export class CardProfilComponent implements OnInit {
  @Input() player: UserGameData = {
    id: 'pending...',
    login: 'pending...',
    levelRating: 1,
  };
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

  goToProfileUser = () => {
    this.router.navigate([`profile/${this.player?.id}`]);
  };

  ngOnInit(): void {
    this.selectStar(this.player.levelRating);
  }
}
