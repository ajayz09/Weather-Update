import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse,rubberBand,fadeIn } from 'ng-animate';
import { Router, NavigationEnd } from '@angular/router';
// import { MapContentComponent } from './map-content/map-content.component';
// [coordinates] = "coordinates"
@Component({
  selector: 'app-home',
  template : '<app-map-content Abc = "test"> </app-map-content>',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', useAnimation(fadeIn,{
      params: { timing: 1, delay: 1 }
    }))]),
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand,{
      params: { timing: 2, delay: 2 }
    }))])
  ],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }

  fadeIn: any;
  rubberBand: any;
  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  }
  Abc = '123';
  latitude = {};
  longitude = {};
  coordinates = {};
  getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      // console.log(position.coords);
      // this.coordinates = position.coords;
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

    });
    this.router.navigate(['/weather']);
  }
}
