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

  infoSpan: HTMLElement | null = document.getElementById('levelCount');
  isAddFavorite = true;
  selectedRating = 0;
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
      level: 'Débutant',
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

    this.infoSpan = document.getElementById('levelCount');
    if (this.infoSpan)
      this.infoSpan.innerHTML = this.stars[this.selectedRating - 1].level;
  }

  clickOn() {
    console.log(this.selectedRating);
  }

  closeDialog() {
    this.dialogRef.close(this.selectedRating);
  }
}
