import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core/';
import { of } from 'rxjs/internal/observable/of';
import LoginData from '../../model/login-data';
import AuthService from '../../services/auth.service';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let authService: AuthService;

  beforeEach(() => {
    authService = {} as AuthService;
    component = new LoginPageComponent(authService, {} as TranslateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('test sign up', () => {
    const loginData : LoginData = {email:'test@test.com', password:'test'};
    authService.signup = jest.fn().mockReturnValue( of(true) );

    component.onSubmitRegister(loginData);
    expect(authService.signup).toHaveBeenCalledWith(loginData.email, loginData.password);
  })

  it('test sign in', () => {
    const loginData : LoginData = {email:'test@test.com', password:'test'};
    authService.login = jest.fn().mockReturnValue( of(true) );

    component.onSubmitLogin(loginData);
    expect(authService.login).toHaveBeenCalledWith(loginData.email, loginData.password);
  })
});
