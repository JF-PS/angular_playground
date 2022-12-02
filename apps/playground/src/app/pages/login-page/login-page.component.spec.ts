import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core/';
import { of } from 'rxjs/internal/observable/of';
import LoginData from '../../model/login-data';
import AuthService from '../../services/auth.service';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService: AuthService;
  let translate: TranslateService;

  beforeEach(async () => {
    authService = {} as AuthService;
    translate = {} as TranslateService;
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      providers: [
        {provide: AuthService, useValue: authService},
        {provide: TranslateService, useValue: translate},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('test sign up', () => {
    const loginData : LoginData = {email:'test@test.com', password:'test'};
    authService.signup = jest.fn().mockReturnValue( of(true) );

    fixture.detectChanges();
    expect(component.onSubmitRegister(loginData)).toEqual(loginData);
  })

  it('test sign in', () => {
    const loginData : LoginData = {email:'test@test.com', password:'test'};
    authService.login = jest.fn().mockReturnValue( of(true) );

    fixture.detectChanges();
    expect(component.onSubmitLogin(loginData)).toEqual(loginData);
  })
});
