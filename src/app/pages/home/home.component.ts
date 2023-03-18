import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';
import { Movie } from 'src/app/models/movie.interface';
import { moviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _movies: moviesService) { }
  movies$ = this._movies.movies$;
  genres$!: Observable<any>;
  nextPage$!: Observable<number>;
  searchWord$ = new FormControl("");

  ngOnInit(): void {
    this.genres$ = this._movies.getGenres();
    this.getTitles();
    this.doSearch();
  }

  goToNextPage(next: string) {
    let np = parseInt(next.split("=")[1])
    console.log(np)
    this._movies.getTitles(np)
  }
  goToPrviousPage(page: string) {
    let np = parseInt(page.split("=")[1])
    console.log(np - 1)
    this._movies.getTitles(np)
  }

  getTitles() {
    this._movies.getTitles();
  }

  doSearch() {
    this.searchWord$.valueChanges.pipe(
      map(value => value?.toLowerCase()),
      tap(
        searchWord => {
          if (searchWord) {
            this._movies.searchTitles(searchWord).pipe(
              startWith(this.movies$)
            ).subscribe()
          } else {
            this.getTitles()
          }
        }
      ),
      startWith(this.movies$)
    ).subscribe()
  }

}
