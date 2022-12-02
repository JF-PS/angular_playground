import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonWithModalComponent } from '../../components/button-with-modal/button-with-modal.component';
import { CardProfilComponent } from '../../components/card-profil/card-profil.component';
import { take } from 'rxjs';

import { LayoutModule } from '../../components/layout/layout.module';
import { GamePageDetailsComponent } from './game-page-details.component';

import { GameService, GameCloudService } from '../../services';
import { GameType } from '../../types';
import { UserGameData } from '../../model';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';



@NgModule({
  declarations: [
    GamePageDetailsComponent,
    ButtonWithModalComponent,
    CardProfilComponent
  ],

  imports: [
    CommonModule,
    TranslateModule,

    LayoutModule,

    MatTabsModule,
    MatIconModule,
    MatDialogModule,
  ],

  exports: [
    GamePageDetailsComponent,
  ]
})
export class GamePageDetailsModule implements OnInit{
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

  getPseudoByEmail(email: string){
    const i = email.indexOf("@");
    return email.substring(0, i);
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
