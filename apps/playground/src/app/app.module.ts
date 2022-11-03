import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechnoAddComponent } from './components/techno-add/techno-add.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TechnoListComponent } from './components/techno-list/techno-list.component';
import { TechnoDetailsComponent } from './components/techno-details/techno-details.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-techno', component: TechnoAddComponent },
  { path: 'all-technos', component: TechnoListComponent },
  { path: 'all-games', component: GameListComponent },
];

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [RouterModule, TechnoDetailsComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    TechnoAddComponent,
    TechnoListComponent,
    TechnoDetailsComponent,
    GameListComponent,
    GameDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
