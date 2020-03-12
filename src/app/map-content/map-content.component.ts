import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { } from 'googlemaps';
import { WeatherForecastService } from '../weather-forecast.service';


@Component({
  selector: 'app-map-content',
  templateUrl: './map-content.component.html',
  styleUrls: ['./map-content.component.scss']
})
export class MapContentComponent implements OnInit {
  public weatherData: any;
  public forecastData: any;
  constructor(
    private weatherForecast: WeatherForecastService
  ) { }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  func: void = (() => {
    console.log("inside")
    this.getLocation();
  })();

  ngOnInit(): void {}

  lat: number;
  lng: number;
  curTemp: number;
  iconURL: string;
  show: boolean = false;
  gotData : boolean = false;
  gotForecast : boolean = false;
  forecastDetails = [];

  getTemp(passedTemp){
    passedTemp = parseInt(passedTemp)
    return passedTemp;
  }

  getIcon(passedIcon){
    passedIcon = "http://openweathermap.org/img/wn/"+ passedIcon +"@2x.png"
    return passedIcon;
  }

  formatForecastArray(passedForecast){
    for (let i = 0; i < 8; i++){
      var a = new Date(passedForecast.daily.data[i].time*1000);
      var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
      passedForecast.daily.data[i].time = days[a.getDay()]
      console.log(passedForecast.daily.data[i].time);
    }
    return passedForecast;
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;

      this.weatherForecast
        .getCurrentWeather(this.lat,this.lng)
        .subscribe(data => {
          this.weatherData = data;
          this.curTemp = this.getTemp(this.weatherData.main.temp);
          this.iconURL = this.getIcon(this.weatherData.weather[0].icon)
          this.gotData = true;
        });

      this.weatherForecast
        .getWeatherForecast(this.lat,this.lng)
        .subscribe(data => {
          this.forecastData = data;
          this.forecastData = this.formatForecastArray(this.forecastData);
          console.log('Forecast',this.forecastData.daily.data[0].time);
          this.gotForecast = true;
        })
    })
  }
}
