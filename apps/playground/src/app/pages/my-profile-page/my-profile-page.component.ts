import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileData, PlayerGameData } from '../../model';
import {
  UserService,
  UserCloudService,
  GameCloudService,
} from '../../services';
import { MatDialog } from '@angular/material/dialog';
import { RemoveFavoriteModalComponent } from '../../components/remove-favorite-modal/remove-favorite-modal.component';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'project-majeur-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.css'],
})
export class MyProfilePageComponent implements OnInit {
  currentUser: ProfileData | undefined = undefined;
  favoritesGames: PlayerGameData[] = [];
  isUserLoged = false;

  constructor(
    private readonly userService: UserService,
    private readonly userCloudService: UserCloudService,
    private gameCloud: GameCloudService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private readonly router: Router
  ) {}

  callFavoriteGames(userId: string): void {
    this.gameCloud.getFavoriteGames(userId).subscribe((myGameList) => {
      this.favoritesGames = myGameList;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { id = null } = params;
      this.userService.profile$.subscribe((userLoged) => {
        if (!id || userLoged?.id === id) {
          if (userLoged) this.callFavoriteGames(userLoged?.id);
          this.isUserLoged = true;
          this.currentUser = userLoged;
        } else {
          this.userCloudService.getUser(id).subscribe((user) => {
            if (user?.id) this.callFavoriteGames(user?.id);
            this.isUserLoged = false;
            this.currentUser = user;
          });
        }
      });
    });
  }

  removeGameToFavorite = (gameId: number) => {
    const dialogRef = this.dialog.open(RemoveFavoriteModalComponent, {
      width: '340px',
      data: 'right click',
    });

    dialogRef.afterClosed().subscribe((isComfirmAction) => {
      if (isComfirmAction) {
        this.gameCloud
          .removeFavoriteUserGame(gameId)
          .pipe(take(1))
          .subscribe(() => {
            this.toastr.success(
              'Le jeu sélectionné à bien été supprimer de la liste',
              'Supression comfirmé'
            );
            if (this.currentUser) this.callFavoriteGames(this.currentUser?.id);
          });
      }
    });
  };
}
