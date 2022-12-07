import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'project-majeur-remove-favorite-modal',
  templateUrl: './remove-favorite-modal.component.html',
  styleUrls: ['./remove-favorite-modal.component.css'],
})
export class RemoveFavoriteModalComponent {
  constructor(public dialogRef: MatDialogRef<RemoveFavoriteModalComponent>) {}

  SubmitRemoveFavorite() {
    this.dialogRef.close(true);
  }
}
