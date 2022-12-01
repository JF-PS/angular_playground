import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GameService } from '../../services/game.service';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let gameListService: GameService;

  beforeEach(async () => {
    gameListService = {} as GameService;
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      providers: [{
        provide: GameService, useValue: gameListService,
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get Game list', () => {
    const result = [{
      developer: 'a',
      freetogame_profile_url: 'a',
      game_url: 'a',
      genre: 'a',
      id: 1,
      platform: 'a',
      publisher: 'a',
      release_date: 'a',
      short_description: 'a',
      thumbnail: 'a',
      title: 'a' 
    },
    {
      developer: 'b',
      freetogame_profile_url: 'b',
      game_url: 'b',
      genre: 'b',
      id: 2,
      platform: 'b',
      publisher: 'b',
      release_date: 'b',
      short_description: 'b',
      thumbnail: 'b',
      title: 'b' 
    },
    ];

    gameListService.getGameList = jest.fn().mockReturnValue( of(
      [{
        developer: 'a',
        freetogame_profile_url: 'a',
        game_url: 'a',
        genre: 'a',
        id: 1,
        platform: 'a',
        publisher: 'a',
        release_date: 'a',
        short_description: 'a',
        thumbnail: 'a',
        title: 'a' 
      },
      {
        developer: 'b',
        freetogame_profile_url: 'b',
        game_url: 'b',
        genre: 'b',
        id: 2,
        platform: 'b',
        publisher: 'b',
        release_date: 'b',
        short_description: 'b',
        thumbnail: 'b',
        title: 'b' 
      },]
    ) );

    fixture.detectChanges();
    expect(component.popularGames).toEqual(result);
  })
});
