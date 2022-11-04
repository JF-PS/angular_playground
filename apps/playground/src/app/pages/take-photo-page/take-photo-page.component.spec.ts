import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakePhotoPageComponent } from './take-photo-page.component';

describe('TakePhotoPageComponent', () => {
  let component: TakePhotoPageComponent;
  let fixture: ComponentFixture<TakePhotoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakePhotoPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TakePhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
