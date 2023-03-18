import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/models/actor.interface';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  constructor(private _router: Router) { }
  @Input() actor!: Actor;

  ngOnInit(): void {
  }

  goToDetails() {
    this._router.navigateByUrl(`actor/${this.actor.nconst}`)
  }

}
