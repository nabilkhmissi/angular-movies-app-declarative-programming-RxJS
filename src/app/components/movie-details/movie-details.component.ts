import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Movie } from 'src/app/models/movie.interface';
import { moviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _movies: moviesService) { }
  movie$!: Observable<any>;
  rating: number[] = [];

  ngOnInit(): void {
    this._activatedRoute.paramMap.pipe(
      map(params => params.get('id')!),
      tap((id: string) => {
        this.movie$ = this._movies.getMovieById(id).pipe(
          tap((movie: any) => {
            this.rating = this.getArrayFromNumber(movie.rating.averageRating)
          })
        )
      })
    ).subscribe();
  }

  getArrayFromNumber(n: number) {
    let res = [];
    for (let index = 1; index < n; index++) {
      res.push(index)
    }
    console.log(res)
    return res;
  }

}
