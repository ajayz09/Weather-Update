import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse,rubberBand,fadeIn } from 'ng-animate';
import { Router, NavigationEnd } from '@angular/router';
// import { MapContentComponent } from './map-content/map-content.component';

@Component({
  selector: 'app-home',
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

  constructor(private router: Router) { }

  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      console.log("Scrolling to top");
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    });
  }

  fadeIn: any;
  rubberBand: any;
  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  }

  onGoToPage2() {
    console.log("clicked");

    this.router.navigate(['/weather']);
  }
}
