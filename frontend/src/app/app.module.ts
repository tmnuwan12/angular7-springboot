import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdItemsComponent } from './ad/ad.component';
import {AdManagerComponent} from './manage/ad.manager';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MaterialModule } from './material/material';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'landing', pathMatch: 'full' },
  // {path: 'landing', component: AppComponent},
  {path: 'listing', component: AdItemsComponent},
  { path: 'manage', component: AdManagerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AdItemsComponent,
    AdManagerComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
