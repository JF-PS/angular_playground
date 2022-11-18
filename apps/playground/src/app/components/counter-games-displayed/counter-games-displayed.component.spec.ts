import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGamesDisplayed } from './counter-games-displayed.component';

describe('CounterGamesDisplayed', () => {
  let component: CounterGamesDisplayed;
  let fixture: ComponentFixture<CounterGamesDisplayed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterGamesDisplayed],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterGamesDisplayed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
