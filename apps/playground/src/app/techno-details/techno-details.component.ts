/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { TechnoType } from '../types';

@Component({
  selector: 'angular-majeur-techno-details',
  templateUrl: './techno-details.component.html',
  styleUrls: ['./techno-details.component.css'],
})
export class TechnoDetailsComponent implements OnInit {
  @Input() tech: TechnoType;

  constructor() {
    this.tech = {
      category: '',
      details: '',
      technoname: '',
    };
  }

  ngOnInit(): void {}
}
