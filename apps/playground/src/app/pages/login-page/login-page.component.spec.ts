import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core/';
import { of } from 'rxjs/internal/observable/of';
import LoginData from '../../model/login-data';
import AuthService from '../../services/auth.service';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    authService = {} as AuthService;
    await TestBed.configureTestingModule({
      imports : [TranslateModule.forRoot()],
      declarations: [LoginPageComponent],
      providers: [
        {provide: AuthService, useValue: authService},
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

    component.onSubmitLogin(loginData);
    fixture.detectChanges();
    expect(authService.login).toHaveBeenCalledWith(loginData.email, loginData.password);
  })
});
