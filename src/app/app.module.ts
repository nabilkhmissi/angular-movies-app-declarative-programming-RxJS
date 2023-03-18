import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShortenPipe } from './components/pipes/shorten.pipe';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesUpcomingComponent } from './pages/movies-upcoming/movies-upcoming.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActorComponent } from './components/actor/actor.component';
import { ActorsComponent } from './components/actors/actors.component';
import { ActorsPageComponent } from './pages/actors-page/actors-page.component';
import { ActorDetailsComponent } from './pages/actor-details/actor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent,
    MoviesComponent,
    SidebarComponent,
    ShortenPipe,
    MovieDetailsComponent,
    MoviesUpcomingComponent,
    HomeComponent,
    FooterComponent,
    ActorComponent,
    ActorsComponent,
    ActorsPageComponent,
    ActorDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
