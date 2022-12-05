import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from '../../components/layout/layout.module';
import { TakePhotoPageComponent } from './take-photo-page.component';
import { WebcamModule } from 'ngx-webcam';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ProfilePictureModule } from '../../components/profile-picture/profile-picture.module';

@NgModule({
  declarations: [TakePhotoPageComponent],

  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TakePhotoPageComponent,
      },
    ]),

    LayoutModule,
    WebcamModule,

    MatButtonModule,
    ProfilePictureModule,
  ],

  exports: [TakePhotoPageComponent],
})
export class TakePhotoPageModule {}
