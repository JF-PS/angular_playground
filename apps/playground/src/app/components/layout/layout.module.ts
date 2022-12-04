import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    LayoutComponent,
  ],

  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,

    NavbarModule,
  ],

  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule {}
