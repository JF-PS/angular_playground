/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component } from '@angular/core';
import { take } from 'rxjs';
import { LoginData } from '../../model';
import { AuthService } from '../../services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'project-majeur-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  isLoginForm = true;
  myConnectChoice = 'login';

  constructor(
    private readonly authService: AuthService,
    private readonly translate: TranslateService // private readonly snackbar: MatSnackBar
  ) {}

  handleSubmit = (data: LoginData) => {
    if (this.isLoginForm) this.onSubmitLogin(data);
    else this.onSubmitRegister(data);
  };

  onChange = (connectMethod: string) => {
    this.isLoginForm = connectMethod === 'login';
  };

  onSubmitLogin = (data: LoginData) => {
    this.authService
      .login(data.email, data.password)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          console.log(res);
          history.back();
        } else {
          console.error('Errors occured');
        }
      });
  };

  onSubmitRegister = (data: LoginData) => {
    this.authService
      .signup(data.email, data.password)
      .pipe(take(1))
      .subscribe((res) => {
        if (res) {
          console.log(res);
          history.back();
        } else {
          console.error('Errors occured');
        }
      });
  };
}
