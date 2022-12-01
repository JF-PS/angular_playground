import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
  ],

  imports: [
    CommonModule,
    TranslateModule,

    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],

  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule {}
