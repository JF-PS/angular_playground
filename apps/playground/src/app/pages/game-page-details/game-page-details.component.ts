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

@Component({
  selector: 'project-majeur-game-page-details',
  templateUrl: './game-page-details.component.html',
  styleUrls: ['./game-page-details.component.css'],
})
export class GamePageDetailsComponent implements OnInit {

  id: number | null = null;
  gameById: GameType | null = null;
  playerList: UserGameData[] = [];

  img = "https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=2000";
  libelle = "Mathieu";

  constructor(
    private route: ActivatedRoute,
    private ts: GameService,
    public dialog: MatDialog,
    private gameCloud: GameCloudService
  ) {}

  
  getPseudoByEmail(email: string) {
    const i = email.indexOf("@");
    return email.substring(0, i);
  }
    
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
    const dialogRef = this.dialog.open(ButtonWithModalComponent, {
      width: '340px',
      data: 'right click',
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
