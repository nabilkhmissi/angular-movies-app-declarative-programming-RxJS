import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularModulesTest';
  slides = ['assets/carousel/slide1.jpg', 'assets/carousel/slide2.jpg', 'assets/carousel/slide3.jpg', 'assets/carousel/slide4.jpg']
}
