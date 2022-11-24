import { Component, Input } from '@angular/core';
import CardType from '../../types/card-type';

@Component({
  selector: 'project-majeur-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card: CardType;

  constructor() {
    this.card = {
      libelle: '',
      imageUrl: '',
    }
  }
}
