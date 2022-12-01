import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
  ],

  imports: [
    RouterModule,
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
