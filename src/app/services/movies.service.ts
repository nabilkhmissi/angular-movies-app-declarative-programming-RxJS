import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, concatMap, filter, map, mergeMap, observable, Observable, of, startWith, switchMap, take, tap } from 'rxjs';
import { Response } from '../models/response.interface';
import { Movie } from '../models/movie.interface';
import { Actor } from '../models/actor.interface';
import { ParamMap } from '@angular/router';
import { Rating } from '../models/rating.interface';


@Injectable({
  providedIn: 'root'
})
export class moviesService {


  readonly baseUrl = environment.moviesUrl;
  movies$ = new BehaviorSubject<Response>(<Response>{ entries: 0, next: "", page: 1, results: [] });
  actors$ = new BehaviorSubject<Response>(<Response>{ entries: 0, next: "", page: 1, results: [] });
  constructor(private _http: HttpClient) {
  }

  getUpcomingMovies(page?: number) {
    let queryParams = new HttpParams();
    if (page) {
      queryParams = queryParams.append('page', page)
    }
    return this._http.get<Response>(`${this.baseUrl}/titles/x/upcoming`, { headers: environment.headers, params: queryParams }).pipe(
      map((response) => this.processResponse(response)),
      tap(res => this.movies$.next(res))
    ).subscribe();
  }
  private processResponse(response: Response): Response {
    return {
      next: response.next,
      page: response.page,
      entries: response.entries,
      results: response.results.map((movie: Movie) => (<Movie>{
        id: movie.id,
        primaryImage: movie.primaryImage ? movie.primaryImage : { url: "/assets/img/thumb.jpg" },
        titleType: movie.titleType,
        titleText: movie.titleText,
        releaseYear: movie.releaseYear,
        releaseDate: movie.releaseDate
      }))
    }
  }
  getMovieById(id: string) {
    return this._http.get<any>(`${this.baseUrl}/titles/${id}`, { headers: environment.headers }).pipe(
      map(result => {
        return result.results
      }),
      mergeMap((movie: Movie) => {
        return this.getMovieRating(movie.id).pipe(
          map((rating: Rating) => {
            if (rating) {
              return { ...movie, rating: { ...rating, averageRating: Math.round(rating.averageRating) } }
            }
            return { ...movie, rating: { numVotes: 100, averageRating: 2 } };
          }),
          mergeMap(movie => {
            return this.getMovieMainActors(movie.id).pipe(
              map(actors => {
                return { ...movie, actors }
              })
            )
          })
        )
      }),
      tap(movie => console.log(movie))

    )
  }
  getMoviesById(ids: string) {
    return this._http.get<any>(`https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids`,
      { headers: environment.headers, params: { idsList: ids } });
  }
  getMovieMainActors(id: string): Observable<any> {
    return this._http.get<any>(`${this.baseUrl}/titles/${id}/main_actors`, { headers: environment.headers })
  }
  getGenres() {
    return this._http.get<any>(`${this.baseUrl}/titles/utils/genres`, { headers: environment.headers }).pipe(
      map(response => {
        return response.results
      })
    )
  }
  getMovieRating(id: string) {
    return this._http.get(`${this.baseUrl}/titles/${id}/ratings`, { headers: environment.headers }).pipe(
      map((response: any) => {
        return response.results
      })
    )
  }
  getTitles(page?: number) {
    let queryParams = new HttpParams();
    if (page) {
      queryParams = queryParams.append('page', page)
    }
    return this._http.get<Response>(`${this.baseUrl}/titles`, { headers: environment.headers, params: queryParams }).pipe(
      map(this.processResponse),
      tap(res => {
        this.movies$.next(res)
      })
    ).subscribe();
  }
  getMovieCrew(id: string) {
    return this._http.get<any>(`${this.baseUrl}/titles/${id}/crew`, { headers: environment.headers })
  }
  getActors() {
    return this._http.get<Response>(`${this.baseUrl}/actors`, { headers: environment.headers }).pipe(
      map(this.processActors),
      tap(res => {
        this.actors$.next(res),
          console.log(res)
      }
      )
    ).subscribe();
  }
  getMovieSeasons(id: string) {
    return this._http.get<Response>(`${this.baseUrl}/titles/seasons/${id}`, { headers: environment.headers }).pipe(
      tap(res => {
        this.movies$.next(res)
      }
      )
    )
  }
  searchTitles(keyword: string) {
    let params = new HttpParams();
    params.append('page', '1');
    params.append('limit', 10);
    return this._http.get<Response>(`${this.baseUrl}/titles/search/keyword/${keyword}`, { headers: environment.headers, params: params }).pipe(
      tap(res => {
        this.movies$.next(res)
      }
      )
    )
  }
  processActors(response: Response) {
    return {
      page: response.page,
      next: response.next,
      entries: response.entries,
      results: response.results.map(actor => (<Actor>{
        birthYear: actor.birthYear,
        deathYear: actor.deathYear,
        knownForTitles: actor.knownForTitles,
        nconst: actor.nconst,
        primaryName: actor.primaryName,
        primaryProfession: actor.primaryProfession.split(',')
      }))
    }
  }
  getActorById(id: string) {
    return this._http.get<any>(`${this.baseUrl}/actors/${id}`, { headers: environment.headers }).pipe(
      map(res => (res.results)),
      map(actor => (<Actor>{
        birthYear: actor.birthYear,
        deathYear: actor.deathYear,
        knownForTitles: actor.knownForTitles,
        nconst: actor.nconst,
        primaryName: actor.primaryName,
        primaryProfession: actor.primaryProfession.split(',')
      })),
      concatMap((actor: Actor) => {
        return this.getMoviesById(actor.knownForTitles).pipe(
          map(res => res.results),
          map(movies => {
            return { ...actor, movies }
          })
        )
      })
    )
  }
  getMoviesEpisodes(id: string) {
    return this._http.get<any>(`${this.baseUrl}/titles/seasons/${id}`, { headers: environment.headers })
  }
}
