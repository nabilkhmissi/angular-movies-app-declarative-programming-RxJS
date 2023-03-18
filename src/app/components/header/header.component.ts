import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
