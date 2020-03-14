import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(
    private http: HttpClient

  ) { }

  getCurrentWeather(lat,long) {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid="your api key"');
  }

  getWeatherForecast(lat,long) {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"your api key"/'+lat+','+long+'?units=si')
  }
}
