import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTagPageComponent } from './search-by-tag-page.component';

describe('SearchByTagPageComponent', () => {
  let component: SearchByTagPageComponent;
  let fixture: ComponentFixture<SearchByTagPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchByTagPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchByTagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
