import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse,rubberBand,fadeIn } from 'ng-animate';
import { Router, NavigationEnd } from '@angular/router';

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

  fadeIn: any;
  rubberBand: any;
  show : boolean = false;

  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  }

  seeResults() {
    this.router.navigate(['/weather']);
  }
}
