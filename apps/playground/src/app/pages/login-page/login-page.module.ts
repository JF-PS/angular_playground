import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '../../components/layout/layout.module';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../../components/navbar/navbar.module';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
  ],

  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPageComponent,
      },
    ]),

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatIconModule,

    LayoutModule,
    NavbarModule,
  ],

  exports: [
    LoginPageComponent,
  ]
})
export class LoginPageModule {}
