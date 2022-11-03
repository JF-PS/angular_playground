/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { TechnoType } from '../types';
import { uniqueId } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class TechnoService {
  private technos: TechnoType[] = [];

  constructor() {}

  createTechno = (techno: TechnoType) => {
    const newTechno = { id: uniqueId(), ...techno, createdAt: Date.now() };
    this.technos = [newTechno, ...this.technos];
    console.log(this.technos);
  };

  getTechno = () => {
    return this.technos;
  };
}
