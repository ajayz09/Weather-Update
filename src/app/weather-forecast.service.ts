import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(
    private http: HttpClient

  ) { }

  getWeather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=-34.4326144&lon=150.89336319999998&appid=c35126e7550929370f9aa0995b17aa41');
  }
  // api.openweathermap.org/data/2.5/weather?lat=-34.4326144&lon=150.89336319999998&appid=c35126e7550929370f9aa0995b17aa41
  // c35126e7550929370f9aa0995b17aa41

}
