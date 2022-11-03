/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { TechnoType } from '../types';
import { TechnoService } from '../services/techno.service';

interface FormDataType {
  value: TechnoType;
  reset: () => void;
}

@Component({
  selector: 'angular-majeur-techno-add',
  templateUrl: './techno-add.component.html',
  styleUrls: ['./techno-add.component.css'],
})
export class TechnoAddComponent implements OnInit {
  constructor(private ts: TechnoService) {}

  ngOnInit = (): void => {};

  addTechno = (formData: FormDataType) => {
    this.ts.createTechno(formData?.value);
    formData.reset();
  };
}
