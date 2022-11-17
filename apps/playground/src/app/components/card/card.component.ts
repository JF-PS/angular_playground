import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-majeur-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() libelle: string | null = null;
  @Input() imageUrl: string | null = null;
}
