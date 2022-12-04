import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { AddFavoriteModalComponent } from '../../components/add-favorite-modal/add-favorite-modal.component';
import { RemoveFavoriteModalComponent } from '../../components/remove-favorite-modal/remove-favorite-modal.component';
import { CardProfilComponent } from '../../components/card-profil/card-profil.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { GamePageDetailsComponent } from './game-page-details.component';
import { MatButtonModule } from '@angular/material/button';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { ProfilePictureModule } from '../../components/profile-picture/profile-picture.module';

@NgModule({
  declarations: [
    GamePageDetailsComponent,
    CardProfilComponent,
    AddFavoriteModalComponent,
    RemoveFavoriteModalComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,

    LayoutModule,
    NavbarModule,

    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ProfilePictureModule,
  ],
  exports: [GamePageDetailsComponent],
})
export class GamePageDetailsModule {}
