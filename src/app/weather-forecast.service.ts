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
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=c35126e7550929370f9aa0995b17aa41&units=metric');
  }

  getWeatherForecast(lat,long) {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/71d6fcfd1021163bc55b0e16d452f550/'+lat+','+long+'?units=si')
  }
}
