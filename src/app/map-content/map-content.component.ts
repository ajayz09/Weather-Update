import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { } from 'googlemaps';
import { WeatherForecastService } from '../weather-forecast.service';

// AIzaSyAJ2YMMXw8e1u1_fiRZS0 E1KKJQRklVWUc
@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  styleUrls: ['./map-content.component.scss']
})
export class MapContentComponent implements OnInit {
  public weatherData: any;
  constructor(
    private weatherForecast: WeatherForecastService
  ) { }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  func: void = (() => {
    this.getLocation();
  })();

  ngOnInit(): void {

  }

  lat: number;
  lng: number;
  show : boolean = false

  getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      alert(this.lat);
      alert(this.lng);
      this.weatherForecast
        .getWeather()
        .subscribe(data => {
          this.weatherData = data;
          console.log('Weather Got from API call',this.weatherData.name);
    });
  })
}
}
