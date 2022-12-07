/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, EventEmitter, Output, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { LoginData } from '../../model';
@Component({
  selector: 'project-majeur-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Input() isLoginForm: boolean;
  minPw = 8;
  hide = true;

  loginForm: FormGroup = this.formBuilder.group(
    {
      login: new FormControl('login'),
      email: new FormControl('email@email.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('testtest', [
        Validators.required,
        Validators.minLength(this.minPw),
      ]),
      comfirmPassword: new FormControl('testtest', [Validators.required]),
    },
    {
      validator: (formGroup: FormGroup) => {
        if (!this.isLoginForm) {
          const { password: pwd, comfirmPassword: comfirmPwd } =
            formGroup.controls;
          if (pwd.value === comfirmPwd.value) return null;
          else return { passwordMismatch: true };
        }
        return null;
      },
    }
  );

  get login(): FormControl {
    return this.loginForm.get('login')! as FormControl;
  }

  get email(): FormControl {
    return this.loginForm.get('email')! as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password')! as FormControl;
  }

  get comfirmPassword(): FormControl {
    return this.loginForm.get('comfirmPassword')! as FormControl;
  }

  @Output() submitLogin = new EventEmitter<LoginData>();

  constructor(private readonly formBuilder: FormBuilder) {
    this.isLoginForm = true;
  }

  onSubmit() {
    const { email = '', password = '', login = null } = this.loginForm.value;
    this.submitLogin.emit(new LoginData(email, password, login));
  }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (!this.isLoginForm) {
      if (this.loginForm.hasError('passwordMismatch'))
        this.comfirmPassword.setErrors([{ passwordMismatch: true }]);
      else this.comfirmPassword.setErrors(null);
    }
  }
}
