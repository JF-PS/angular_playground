import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonWithModalComponent } from '../../components/button-with-modal/button-with-modal.component';
import { CardProfilComponent } from '../../components/card-profil/card-profil.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { GamePageDetailsComponent } from './game-page-details.component';

@NgModule({
  declarations: [
    GamePageDetailsComponent,
    ButtonWithModalComponent,
    CardProfilComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    LayoutModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
  ],
  exports: [GamePageDetailsComponent],
})
export class GamePageDetailsModule {}
