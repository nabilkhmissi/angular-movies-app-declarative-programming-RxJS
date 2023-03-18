import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.interface';
import { moviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-upcoming',
  templateUrl: './movies-upcoming.component.html',
  styleUrls: ['./movies-upcoming.component.css']
})
export class MoviesUpcomingComponent implements OnInit {

  constructor(private _movies: moviesService) { }
  movies$ = this._movies.movies$
  genres$!: Observable<any>

  ngOnInit(): void {
    this._movies.getUpcomingMovies();
  }
}
