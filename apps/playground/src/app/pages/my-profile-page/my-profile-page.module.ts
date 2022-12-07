import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { CardGameComponent } from '../../components/card-game/card-game.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { MyProfilePageComponent } from './my-profile-page.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfilePictureModule } from '../../components/profile-picture/profile-picture.module';

@NgModule({
  declarations: [MyProfilePageComponent, CardGameComponent],

  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    LayoutModule,
    MatCardModule,
    MatProgressBarModule,
    MatTabsModule,
    ProfilePictureModule,
  ],

  exports: [MyProfilePageComponent],
})
export class MyProfilePageModule {}
