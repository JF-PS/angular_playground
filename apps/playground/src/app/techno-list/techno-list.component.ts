/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { TechnoService } from '../services/techno.service';
import { TechnoType } from '../types';

@Component({
  selector: 'angular-majeur-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.css'],
})
export class TechnoListComponent implements OnInit {
  allTechnos: TechnoType[] = [];

  constructor(private ts: TechnoService) {}

  // When loading the component,
  // we call the list of technos.
  ngOnInit(): void {
    this.getTechnos();
  }

  getTechnos = () => {
    this.allTechnos = this.ts.getTechno();
  };
}
