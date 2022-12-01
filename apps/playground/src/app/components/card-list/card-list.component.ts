/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input } from '@angular/core';
import { CardService } from '../../services/card.service';
import CardType from '../../types/card-type';

@Component({
  selector: 'project-majeur-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  @Input() cardList: CardType[];

  constructor() {
    this.cardList = [];
  }
}
