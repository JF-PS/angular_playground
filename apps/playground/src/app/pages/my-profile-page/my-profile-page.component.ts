import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileData, PlayerGameData } from '../../model';
import { UserService, GameCloudService } from '../../services';
@Component({
  selector: 'project-majeur-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css'],
})
export class MyProfilePageComponent implements OnInit {
  profile$: Observable<ProfileData | undefined> = this.userService.profile$;
  favoritesGames: PlayerGameData[] = [];
<<<<<<< HEAD
  profile$: Observable<ProfileData | undefined> = this.userService.profile$;
  favoritesGames: PlayerGameData[] = [];

<<<<<<< HEAD
  id: number | null = null;
  gameById: GameType | null = null;
=======

>>>>>>> develop
  constructor(
    private readonly userService: UserService,
    private gameCloud: GameCloudService
  ) {}

<<<<<<< HEAD
 getGameById = (id: string) => {
    this.ts.getGameById({ id }).subscribe((res: any) => {
      this.gameById = res;
    });
  };
  ts: any;
=======
>>>>>>> develop
  ngOnInit(): void {
    this.gameCloud.getFavoriteGames().subscribe((myGameList) => {
      console.log(myGameList);
      this.favoritesGames = myGameList;
    });
  }
<<<<<<< HEAD
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
=======
>>>>>>> develop
}
