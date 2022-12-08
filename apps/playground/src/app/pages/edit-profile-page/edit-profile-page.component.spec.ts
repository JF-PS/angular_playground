import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileData } from '../../model';
import { UserService, UserCloudService } from '../../services';

import { EditProfilePageComponent } from './edit-profile-page.component';

describe('EditProfilePageComponent', () => {
  let component: EditProfilePageComponent;
  let fixture: ComponentFixture<EditProfilePageComponent>;
  let userService : UserService;
  let userCloudService : UserCloudService;

  beforeEach(async () => {
    userService = {} as UserService,
    userCloudService = {} as UserCloudService,
    await TestBed.configureTestingModule({
      declarations: [EditProfilePageComponent],
      providers: [
        {provide: UserService, useValue: userService},
        {provide: UserCloudService, useValue: userCloudService},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('test update user', () => {
  //   const profilData : ProfileData = {
  //     age: '24',
  //     login: '',
  //     playStyle: '',
  //     description: ''
  //   };
  //   //userCloudService.updateUser = jest.fn().mockReturnValue( of(void) );

  //   fixture.detectChanges();
  //   expect(component.handleSubmit(profilData)).toEqual(profilData);
  // })
});
