import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EditFormComponent } from '../../components/edit-form/edit-form.component';

import { LayoutModule } from '../../components/layout/layout.module';
import { EditProfilePageComponent } from './edit-profile-page.component';
import { WebcamModule } from 'ngx-webcam';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [EditProfilePageComponent, EditFormComponent],

  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    LayoutModule,
    MatRadioModule,
    MatFormFieldModule,
    WebcamModule,
    MatButtonModule,
  ],

  exports: [EditProfilePageComponent],
})
export class EditProfilePageModule {}