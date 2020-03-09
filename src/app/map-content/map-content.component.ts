import { Component, OnInit, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  styleUrls: ['./map-content.component.scss']
})
export class MapContentComponent implements OnInit {

  // @Input() coordinates: any[];
  @Input() Abc: string;
  constructor() {}
  ngOnInit(): void {
    console.log(' got',this.Abc);
  }

  show : boolean = false
}
