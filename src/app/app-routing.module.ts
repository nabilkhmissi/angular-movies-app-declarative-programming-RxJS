import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './components/actor/actor.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { ActorDetailsComponent } from './pages/actor-details/actor-details.component';
import { ActorsPageComponent } from './pages/actors-page/actors-page.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesUpcomingComponent } from './pages/movies-upcoming/movies-upcoming.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'upcoming', component: MoviesUpcomingComponent },
  { path: 'actors', component: ActorsPageComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'actor/:id', component: ActorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
