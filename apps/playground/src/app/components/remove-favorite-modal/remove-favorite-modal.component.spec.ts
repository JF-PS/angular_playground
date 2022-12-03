import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFavoriteModalComponent } from './remove-favorite-modal.component';

describe('RemoveFavoriteModalComponent', () => {
  let component: RemoveFavoriteModalComponent;
  let fixture: ComponentFixture<RemoveFavoriteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveFavoriteModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveFavoriteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
