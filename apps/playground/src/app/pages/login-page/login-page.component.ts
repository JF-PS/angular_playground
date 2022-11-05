/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'project-majeur-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
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

  constructor(private readonly formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.loginForm.value);
  }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.loginForm.hasError('passwordMismatch'))
      this.comfirmPassword.setErrors([{ passwordMismatch: true }]);
    else this.comfirmPassword.setErrors(null);
  }
}
