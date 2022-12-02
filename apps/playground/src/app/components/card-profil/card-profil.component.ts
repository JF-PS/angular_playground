import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-majeur-card-profil',
  templateUrl: './card-profil.component.html',
  styleUrls: ['./card-profil.component.css'],
})
export class CardProfilComponent {
  
  @Input() libelle!: String;
  @Input() image!: String;

  @Input()
  rating!: number;
  
  selectedRating = 0;

  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star',
      
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star',
      
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star',
      
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star',
      
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star',
      
    }

  ];

selectStar(value: number): void{

    this.stars.filter( (star) => {

      if ( star.id <= value){

        star.class = 'star-gold star';

      }else{

        star.class = 'star-gray star';

      }

      return star;
    });
    this.selectedRating = value;
    
  }

  constructor() {}

  ngOnInit(): void {
    this.selectStar(this.rating)
  }

}
