/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService, GameCloudService } from '../../services';
import { GameType } from '../../types';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ButtonWithModalComponent } from '../../components/button-with-modal/button-with-modal.component';
import { UserGameData } from '../../model';
import { DialogComponent } from '../../components/dialog/dialog.component';


@Component({
  selector: 'project-majeur-game-page-details',
  templateUrl: './game-page-details.component.html',
  styleUrls: ['./game-page-details.component.css'],
})
export class GamePageDetailsComponent implements OnInit {
  isStarRating = true;
  id: number | null = null;
  gameById: GameType | null = null;
  playerList: UserGameData[] = [];

  constructor(
    private route: ActivatedRoute,
    private ts: GameService,
    public dialog: MatDialog,
    private gameCloud: GameCloudService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { id } = params;
      this.id = id;
      this.getGameById(id);
      this.gameCloud.getGamePlayers(id).subscribe((players) => {
        console.log(players);
        this.playerList = players;
      });
    });
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '340px',
      data: ""
    });
  }
  
  openStarRating() {
    const dialogRef = this.dialog.open(ButtonWithModalComponent, {
      width: '340px',
      data: "",
    });

    dialogRef.afterClosed().subscribe((userRatingGameLevel) => {
      this.addGameToFavorite(userRatingGameLevel);
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
        .createOrUpdateGame({
          id: this.gameById?.id,
          picture: this.gameById?.thumbnail,
          title: this.gameById?.title,
        })
        .pipe(take(1))
        .subscribe(() => {
          // if (res) {
          //   console.log(res);
          //   history.back();
          // } else {
          //   console.error('Errors occured');
          // }
        });
    }
  };
}
