import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse,rubberBand } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand,{
      params: { timing: 2, delay: 2 }
    }))])
  ],
})

export class AppComponent{

  title = 'WeatherUpdate';
  rubberBand: any;
}
