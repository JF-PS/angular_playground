import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutModule } from '../../components/layout/layout.module';
import { MyProfilePageComponent } from './my-profile-page.component';


@NgModule({
  declarations: [
    MyProfilePageComponent,
  ],

  imports: [
    CommonModule,
    TranslateModule,

    LayoutModule,
    MatCardModule,
    MatProgressBarModule,
  ],

  exports: [
    MyProfilePageComponent,
  ]
})
export class MyProfilePageModule {}
