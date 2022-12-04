import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProfilePictureComponent } from './profile-picture.component';

@NgModule({
  declarations: [ProfilePictureComponent],
  imports: [CommonModule, TranslateModule],

  exports: [ProfilePictureComponent],
})
export class ProfilePictureModule {}
