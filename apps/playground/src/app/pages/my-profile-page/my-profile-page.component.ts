import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProfileData, PlayerGameData } from '../../model';
import { UserService, GameCloudService } from '../../services';
import { GameType } from '../../types';

@Component({
  selector: 'project-majeur-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css'],
})
export class MyProfilePageComponent implements OnInit {
  profile$: Observable<ProfileData | undefined> = this.userService.profile$;
  favoritesGames: PlayerGameData[] = [];

  id: number | null = null;
  gameById: GameType | null = null;

  constructor(
    private readonly userService: UserService,
    private gameCloud: GameCloudService
  ) {}

 getGameById = (id: string) => {
    this.ts.getGameById({ id }).subscribe((res: any) => {
      this.gameById = res;
    });
  };
  ts: any;

  ngOnInit(): void {
    this.gameCloud.getFavoriteGames().subscribe((myGameList) => {
      console.log(myGameList);
      this.favoritesGames = myGameList;
    });
  }
}
