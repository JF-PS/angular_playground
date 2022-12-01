import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GamePageDetailsComponent } from './pages/game-page-details/game-page-details.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EditProfilePageComponent } from './pages/edit-profile-page/edit-profile-page.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';
import { SearchByTagPageComponent } from './pages/search-by-tag-page/search-by-tag-page.component';
import { en } from './translations/en';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { LayoutModule } from './components/layout/layout.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { SearchByTagPageModule } from './pages/search-by-tag-page/search-by-tag-page.module';
import { GamePageDetailsModule } from './pages/game-page-details/game-page-details.module';
import { MyProfilePageModule } from './pages/my-profile-page/my-profile-page.module';
import { EditProfilePageModule } from './pages/edit-profile-page/edit-profile-page.module';
import { ServiceWorkerModule } from '@angular/service-worker';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'games', component: SearchByTagPageComponent },
  { path: 'games/:id', component: GamePageDetailsComponent },
  {
    path: 'login',
    // loadChildren:() => ('./pages/login-page/login-page.module').then(m: LoginPageModule) => m.LoginPageModule,
    component: LoginPageComponent
  },
  { path: 'edit-profile', component: EditProfilePageComponent },
  { path: 'my-profile', component: MyProfilePageComponent },
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TranslateModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),

    FormsModule,
    FlexLayoutModule,
    DragDropModule,

    LayoutModule,
    LoginPageModule,
    HomePageModule,
    SearchByTagPageModule,
    GamePageDetailsModule,
    MyProfilePageModule,
    EditProfilePageModule,
  ],

  declarations: [
    AppComponent,
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
