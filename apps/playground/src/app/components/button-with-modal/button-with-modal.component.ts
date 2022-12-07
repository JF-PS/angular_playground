import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

/**
 * @title Button with modal
 */
@Component({
  selector: 'project-majeur-button-with-modal',
  templateUrl: './button-with-modal.component.html',
  styleUrls: ['./button-with-modal.component.css'],
})
export class ButtonWithModalComponent {
  constructor(public dialogRef: MatDialogRef<ButtonWithModalComponent>) {}

  selectedRating: number | null = null;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star',
      level: 'Débutant',
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star',
      level: 'Novice',
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star',
      level: 'Intermédiaire',
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star',
      level: 'Avancé',
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star',
      level: 'Pro',
    },
  ];
  currentLevel = 'Débutant';

  selectStar(value: number): void {
    this.stars.map((star) => {
      if (star.id <= value) {
        star.class = 'star-gold star';
      } else {
        star.class = 'star-gray star';
      }
      return star;
    });
    this.selectedRating = value;
    this.currentLevel = this.stars[this.selectedRating - 1].level;
  }

  SubmitLevelRating() {
    if (this.selectedRating) {
      this.dialogRef.close(this.selectedRating);
    }
  }
}
