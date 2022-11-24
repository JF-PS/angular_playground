import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithModalComponent } from './button-with-modal.component';

describe('ButtonWithModalComponent', () => {
  let component: ButtonWithModalComponent;
  let fixture: ComponentFixture<ButtonWithModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonWithModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonWithModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
