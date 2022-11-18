import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'project-majeur-counter-button',
   template: `
    <button (click)="onButtonClick()">
      <ng-content></ng-content>
    </button>
  `,
  // templateUrl: './button.component.html',
  // styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  // @Input() libelle: string | null = null;
  @Output() buttonClicked = new EventEmitter<void>();
  onButtonClick() {
    this.buttonClicked.emit();
  }
}
