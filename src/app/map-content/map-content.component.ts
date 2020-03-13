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
    (async () => {
        // Do something before delay
        await this.delay(1000);
        this.getLocation();
        console.log('after delay')
    })();

  })();

  ngOnInit(): void {}

  lat: number;
  lng: number;
  curTemp: number;
  highTemp: number;
  lowTemp: number;
  iconURL: string;
  show: boolean = false;
  gotData : boolean = false;
  gotForecast : boolean = false;
  link: boolean = false;
  forecastDetails = [];

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  

  getTemp(passedTemp){
    passedTemp = parseInt(passedTemp)
    return passedTemp;
  }

  getIcon(passedIcon){
    passedIcon = "http://openweathermap.org/img/wn/"+ passedIcon +"@2x.png"
    return passedIcon;
  }

  getFutureIcon(iconText){
    if(iconText === 'clear-day'){
      return 'wi wi-day-sunny'
    }
    else if(iconText === 'rain'){
      return 'wi wi-rain'
    }
    else if (iconText === 'partly-cloudy-day'){
      return 'wi wi-day-sunny-overcast'
    }
    else{
      return iconText
    }
  }

  formatForecastArray(passedForecast){
    for (let i = 0; i < 8; i++){
      var a = new Date(passedForecast.daily.data[i].time*1000);
      var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
      passedForecast.daily.data[i].time = days[a.getDay()]
      passedForecast.daily.data[i].icon = this.getFutureIcon(passedForecast.daily.data[i].icon)
      passedForecast.daily.data[i].temperatureHigh = this.getTemp(passedForecast.daily.data[i].temperatureHigh)
      passedForecast.daily.data[i].temperatureLow = this.getTemp(passedForecast.daily.data[i].temperatureLow)
      console.log(passedForecast);
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
