import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'project-majeur-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css'],
})
export class MyProfilePageComponent implements OnInit {
  profile$: Observable<ProfileData | undefined> = this.userService.profile$;
  favoritesGames: PlayerGameData[] = [];
  profile$: Observable<ProfileData | undefined> = this.userService.profile$;
  favoritesGames: PlayerGameData[] = [];

<<<<<<< HEAD
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
=======
  constructor(
    private readonly userService: UserService,
    private gameCloud: GameCloudService
  ) {}

  ngOnInit(): void {
    this.gameCloud.getFavoriteGames().subscribe((myGameList) => {
      console.log(myGameList);
      this.favoritesGames = myGameList;
    });
  }
>>>>>>> develop
}
