import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TechnoListComponent } from './techno-list/techno-list.component';
import { TechnoDetailsComponent } from './techno-details/techno-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-techno', component: TechnoAddComponent },
  { path: 'all-technos', component: TechnoListComponent },
];

@NgModule({
  imports: [FormsModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, TechnoDetailsComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    TechnoAddComponent,
    TechnoListComponent,
    TechnoDetailsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
