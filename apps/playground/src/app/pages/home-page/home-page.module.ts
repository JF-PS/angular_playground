import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TranslateModule } from '@ngx-translate/core';
import { GameDetailsComponent } from '../../components/game-details/game-details.component';
import { GameListComponent } from '../../components/game-list/game-list.component';
import { GameListModule } from '../../components/game-list/game-list.module';
import { LayoutModule } from '../../components/layout/layout.module';
import { TagsComponent } from '../../components/tags/tags.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TagsComponent,
  ],

  imports: [
    CommonModule,
    TranslateModule,

    LayoutModule,
    GameListModule,
    MatChipsModule,
    MatCardModule,
  ],

  exports: [
    HomePageComponent,
  ]
})
export class HomePageModule {}
