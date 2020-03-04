import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse,rubberBand,fadeIn } from 'ng-animate';
// import { MapContentComponent } from './map-content/map-content.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', useAnimation(fadeIn,{
      params: { timing: 1, delay: 1 }
    }))])
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

  fadeIn: any;

  // createMapComponent() {
  //   console.log("Clicked");
  // }
}
