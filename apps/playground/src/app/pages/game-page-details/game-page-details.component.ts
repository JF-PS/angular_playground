/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService, GameCloudService } from '../../services';
import { GameType } from '../../types';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddFavoriteModalComponent } from '../../components/add-favorite-modal/add-favorite-modal.component';
import { RemoveFavoriteModalComponent } from '../../components/remove-favorite-modal/remove-favorite-modal.component';
import { UserGameData } from '../../model';
import { UserService } from '../../services';

@Component({
  selector: 'project-majeur-game-page-details',
  templateUrl: './game-page-details.component.html',
  styleUrls: ['./game-page-details.component.css'],
})
export class GamePageDetailsComponent implements OnInit {
  id: number | null = null;
  gameById: GameType | null = null;
  playerList: UserGameData[] = [];
  isFavorite = false;
  isUserLoged = false;

  constructor(
    private route: ActivatedRoute,
    private ts: GameService,
    public dialog: MatDialog,
    private gameCloud: GameCloudService,
    private readonly userService: UserService
  ) {}

  getPseudoByEmail(email: string) {
    const i = email.indexOf('@');
    return email.substring(0, i);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { id } = params;
      this.id = id;
      this.getGameById(id);
      this.gameCloud.getGamePlayers(id).subscribe((players) => {
        this.playerList = players;
        this.userService.user$.subscribe((user) => {
          if (user) {
            this.isUserLoged = true;
            const userLoginIsPlayer = players.filter(
              (player) => player.id === user.uid
            )[0];
            if (userLoginIsPlayer) this.isFavorite = true;
          }
        });
      });
    });
  }

  openAddFavoriteModal() {
    const dialogRef = this.dialog.open(AddFavoriteModalComponent, {
      width: '340px',
      data: 'right click',
    });

    dialogRef.afterClosed().subscribe((userRatingGameLevel) => {
      if (userRatingGameLevel) this.addGameToFavorite(userRatingGameLevel);
    });
  }

  openRemoveFavoriteModal() {
    const dialogRef = this.dialog.open(RemoveFavoriteModalComponent, {
      width: '340px',
      data: 'right click',
    });

    dialogRef.afterClosed().subscribe((isComfirmAction) => {
      if (isComfirmAction) this.removeGameToFavorite();
    });
  }

  getGameById = (id: string) => {
    this.ts.getGameById({ id }).subscribe((res) => {
      this.gameById = res;
    });
  };

  addGameToFavorite = (userRatingGameLevel: number) => {
    if (this.gameById?.id) {
      this.gameCloud
        .createOrUpdateGame(
          {
            id: this.gameById?.id,
            picture: this.gameById?.thumbnail,
            title: this.gameById?.title,
          },
          userRatingGameLevel
        )
        .pipe(take(1))
        .subscribe(() => {
          this.isFavorite = true;
        });
    }
  };

  removeGameToFavorite = () => {
    if (this.id)
      this.gameCloud
        .removeFavoriteUserGame(this.id)
        .pipe(take(1))
        .subscribe(() => {
          this.isFavorite = false;
        });
  };
}
