import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { ProfileData, PlayerGameData } from '../../model';
import { UserService, GameCloudService } from '../../services';
@Component({
  selector: 'project-majeur-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css'],
})
export class MyProfilePageComponent implements OnInit {
  currentUser : ProfileData | undefined = undefined;
  // profile$: Observable<ProfileData | undefined> = this.userService.profile$;
  favoritesGames: PlayerGameData[] = [];

  constructor(
    private readonly userService: UserService,
    private gameCloud: GameCloudService
  ) {}

  ngOnInit(): void {
    this.gameCloud.getFavoriteGames().subscribe((myGameList) => {
      console.log(myGameList);
      this.favoritesGames = myGameList;
    });

    this.userService.profile$.subscribe((res) => {
      this.currentUser = res;
    });
  }
}
