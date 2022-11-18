/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component } from '@angular/core';
import { take } from 'rxjs';
import { LoginData } from '../../model';
import { UserService } from '../../services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'project-majeur-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(
    private readonly userService: UserService
  ) // private readonly snackbar: MatSnackBar,
  // private readonly translate: TranslateService
  {}
  onSubmitLogin(data: LoginData) {
    this.userService
      .login(data.email, data.password)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          console.log(res);
          //history.back();
        }
        // else {
        //   this.snackbar.open(this.translate.instant('login.error'), '', {
        //     panelClass: ['error-snackbar'],
        //     duration: 3000,
        //   });
        // }
      });
  }
}
