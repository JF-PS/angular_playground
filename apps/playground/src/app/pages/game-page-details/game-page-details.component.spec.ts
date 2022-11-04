import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePageDetailsComponent } from './game-page-details.component';

describe('GamePageDetailsComponent', () => {
  let component: GamePageDetailsComponent;
  let fixture: ComponentFixture<GamePageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamePageDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamePageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
