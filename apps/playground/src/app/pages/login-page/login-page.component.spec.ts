import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { UserService } from '../../services';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let userService: UserService;
  let translate: TranslateService;

  beforeEach(async () => {
    userService as UserService;
    translate as TranslateService;
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      providers: [
        {provide: UserService, useValue: userService},
        {provide: TranslateService, useValue: translate}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test register', () => {
    userService.signup = jest.fn().mockReturnValue( of(true) );

    fixture.detectChanges();
    expect(component.isLoginForm).toEqual(true);
    expect(component.myConnectChoice).toEqual('register');
  })
});
