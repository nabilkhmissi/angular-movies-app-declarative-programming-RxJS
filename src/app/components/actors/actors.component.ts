import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor.interface';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor() { }

  @Input() actors!: Actor[];

  ngOnInit(): void {
  }

}
