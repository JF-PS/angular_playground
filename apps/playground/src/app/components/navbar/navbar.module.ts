import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
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
    NavbarComponent,
  ]
})
export class NavbarModule {}
