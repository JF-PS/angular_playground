/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, EventEmitter, Output } from '@angular/core';
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
  minPw = 8;

  loginForm: FormGroup = this.formBuilder.group(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.minPw),
      ]),
      comfirmPassword: new FormControl('', [Validators.required]),
    },
    {
      validator: (formGroup: FormGroup) => {
        const { password: pwd, comfirmPassword: comfirmPwd } =
          formGroup.controls;
        if (pwd.value === comfirmPwd.value) return null;
        else return { passwordMismatch: true };
      },
    }
  );

  get email(): FormControl {
    return this.loginForm.get('email')! as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password')! as FormControl;
  }

  get comfirmPassword(): FormControl {
    return this.loginForm.get('comfirmPassword')! as FormControl;
  }

  hide = true;

  @Output() submitLogin = new EventEmitter<LoginData>();

  constructor(private readonly formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.loginForm.value);
    const { email = '', password = '' } = this.loginForm.value;
    this.submitLogin.emit(new LoginData(email, password));
  }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.loginForm.hasError('passwordMismatch'))
      this.comfirmPassword.setErrors([{ passwordMismatch: true }]);
    else this.comfirmPassword.setErrors(null);
  }
}
