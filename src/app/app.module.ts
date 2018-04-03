import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@Angular/forms'



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { MovieComponent } from './movie/movie.component';
import { routing} from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    AboutComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
