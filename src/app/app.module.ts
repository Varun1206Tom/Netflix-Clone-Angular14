import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './features/home/home.component';
import { SearchComponent } from './features/search/search.component';
import { MovieDetailsComponent } from './features/movie-details/movie-details.component';
import { MovieApiServiceService } from './services/movie-api-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ MovieApiServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
