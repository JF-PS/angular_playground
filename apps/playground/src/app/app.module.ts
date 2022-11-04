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
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { en } from './translations/en';
import { DropdownComponent } from './components/dropdown/dropdown.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-techno', component: TechnoAddComponent },
  { path: 'all-technos', component: TechnoListComponent },
  { path: 'all-games', component: GameListComponent },
  { path: 'button', component: ButtonComponent },
];

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    TranslateModule.forRoot(),
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
    ButtonComponent,
    DropdownComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    translate.setTranslation('en', en);
  }
}
