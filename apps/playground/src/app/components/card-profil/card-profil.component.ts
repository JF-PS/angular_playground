import { Component, Input } from '@angular/core';
import CardType from '../../types/card-type';

@Component({
  selector: 'project-majeur-card-profil',
  templateUrl: './card-profil.component.html',
  styleUrls: ['./card-profil.component.css'],
})
export class CardProfilComponent {
  @Input() libelle!: string;
  @Input() image!: string;

  cards: CardType[] = [
    { libelle:'Counter-Strike Global-Offensive', imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { libelle:'test', imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg' },
  ];
}
