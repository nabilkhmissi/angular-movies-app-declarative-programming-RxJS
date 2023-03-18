import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { concatMap, map, Observable, switchMap, tap } from 'rxjs';
import { Actor } from 'src/app/models/actor.interface';
import { Movie } from 'src/app/models/movie.interface';
import { moviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {

  constructor(private _activeRoute: ActivatedRoute,
    private _movies: moviesService) { }

  actor!: any;
  ngOnInit(): void {
    let id = this._activeRoute.snapshot.paramMap.get('id')!

    this._movies.getActorById(id).subscribe(
      actor => {
        this.actor = actor;
        console.log(actor)
      }
    );

  }
}
