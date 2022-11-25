import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameType } from '../../types';

@Component({
  selector: 'project-majeur-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css'],
})
export class MyProfilePageComponent implements OnInit {

  id: number | null = null;
  gameById: GameType | null = null;

 getGameById = (id: string) => {
    this.ts.getGameById({ id }).subscribe((res: any) => {
      this.gameById = res;
    });
  };
  ts: any;
  ngOnInit(): void {}
}
