import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/models/actor.interface';
import { moviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-actors-page',
  templateUrl: './actors-page.component.html',
  styleUrls: ['./actors-page.component.css']
})
export class ActorsPageComponent implements OnInit {

  constructor(private _movies: moviesService) { }

  actors$ = this._movies.actors$;

  ngOnInit(): void {
    this._movies.getActors()
  }

}
