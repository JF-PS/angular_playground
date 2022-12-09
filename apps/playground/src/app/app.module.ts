import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GamePageDetailsComponent } from './pages/game-page-details/game-page-details.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';
import { SearchByTagPageComponent } from './pages/search-by-tag-page/search-by-tag-page.component';
import { en } from './translations/en';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LayoutModule } from './components/layout/layout.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { SearchByTagPageModule } from './pages/search-by-tag-page/search-by-tag-page.module';
import { GamePageDetailsModule } from './pages/game-page-details/game-page-details.module';
import { MyProfilePageModule } from './pages/my-profile-page/my-profile-page.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ToastrModule } from 'ngx-toastr';
import { LoggedUsers } from './services/unlogged-users.service';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  { path: 'games', component: SearchByTagPageComponent },
  { path: 'games/:id', component: GamePageDetailsComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'my-profile',
    component: MyProfilePageComponent,
    canActivate: [LoggedUsers],
  },
  {
    path: 'profile/:id',
    component: MyProfilePageComponent,
    canActivate: [LoggedUsers],
  },
  {
    path: 'take-photo',
    loadChildren: () =>
      import('./pages/take-photo-page/take-photo-page.module').then(
        (m) => m.TakePhotoPageModule
      ),
    canActivate: [LoggedUsers],
  },
  {
    path: 'edit-profile',
    loadChildren: () =>
      import('./pages/edit-profile-page/edit-profile-page.module').then(
        (m) => m.EditProfilePageModule
      ),
    canActivate: [LoggedUsers],
  },
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      messageClass: 'style-toast-message',
      titleClass: 'style-toast-message',
    }),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),

    LayoutModule,
    HomePageModule,
    SearchByTagPageModule,
    GamePageDetailsModule,
    MyProfilePageModule,
  ],

  declarations: [AppComponent],

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
