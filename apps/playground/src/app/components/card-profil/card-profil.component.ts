import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-majeur-card-profil',
  templateUrl: './card-profil.component.html',
  styleUrls: ['./card-profil.component.css'],
})
export class CardProfilComponent {
  cards = [
    {
      libelle: 'Counter-Strike Global-Offensive',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
    {
      libelle: 'test',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    },
  ];
}
