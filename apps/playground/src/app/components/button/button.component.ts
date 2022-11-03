import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-majeur-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() libelle: string | null = null;
}
