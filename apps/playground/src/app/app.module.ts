import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechnoAddComponent } from './components/techno-add/techno-add.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TechnoListComponent } from './components/techno-list/techno-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { TechnoDetailsComponent } from './components/techno-details/techno-details.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GamePageDetailsComponent } from './pages/game-page-details/game-page-details.component';
import { TagsComponent } from './components/tags/tags.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSliderModule } from '@angular/material/slider';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';
import { SearchByTagPageComponent } from './pages/search-by-tag-page/search-by-tag-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatMenuModule } from '@angular/material/menu';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import {  MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
iimport { en } from './translations/en';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutComponent } from './components/layout/layout.component';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
// import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { EditFormComponent } from './components/edit-form/edit-form.component';

import { ButtonWithModalComponent } from './components/button-with-modal/button-with-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogComponent } from './components/dialog/dialog.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add-techno', component: TechnoAddComponent },
  { path: 'all-technos', component: TechnoListComponent },
  { path: 'games', component: SearchByTagPageComponent },
  { path: 'games/:id', component: GamePageDetailsComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'edit-profile', component: EditProfilePageComponent },
  { path: 'my-profile', component: MyProfilePageComponent },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    TranslateModule.forRoot(),
    MatChipsModule,
    DragDropModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    TranslateModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
    MatTabsModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],

  declarations: [
    AppComponent,
    HomePageComponent,
    TechnoAddComponent,
    TechnoListComponent,
    LoginFormComponent,
    TechnoDetailsComponent,
    GameListComponent,
    GameDetailsComponent,
    GamePageDetailsComponent,
    SearchByTagPageComponent,
    ButtonComponent,
    TagsComponent,
    LoginPageComponent,
    EditProfilePageComponent,
    MyProfilePageComponent,
    NavbarComponent,
    EditFormComponent,
    ButtonWithModalComponent,
    LayoutComponent,
    DialogComponent,
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
