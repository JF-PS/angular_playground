import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutModule } from '../../components/layout/layout.module';
import { EditProfilePageComponent } from './edit-profile-page.component';


@NgModule({
  declarations: [
    EditProfilePageComponent,
  ],

  imports: [
    CommonModule,
    TranslateModule,

    LayoutModule,
  ],

  exports: [
    EditProfilePageComponent,
  ]
})
export class EditProfilePageModule {}
