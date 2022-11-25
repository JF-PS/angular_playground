import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from '@angular/core';
import { GameListComponent } from "./game-list.component";
import { TranslateModule } from "@ngx-translate/core";
import { GameDetailsComponent } from '../game-details/game-details.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    GameListComponent,
    GameDetailsComponent,
  ],

  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MatCardModule,
  ],

  exports: [
    GameListComponent,
  ]
})

export class GameListModule {}