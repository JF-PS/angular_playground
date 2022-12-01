import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-majeur-profile-games',
  templateUrl: './profile-games.component.html',
  styleUrls: ['./profile-games.component.css'],
})
export class ProfileGamesComponent implements OnInit {
  @Input()
  rating!: number;
    infoSpan: HTMLElement | null = document.getElementById('levelCount');
  
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
