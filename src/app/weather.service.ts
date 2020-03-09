import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'http://api.openweathermap.org/data/2.5/weather?'
  token = '431996b7032bf54b8d64c0ba99ced49a'

  constructor(private http: HttpClient) { }

  getWeather(city) {
    return this.http.get(`${this.url}q=${city}&appid=${this.token}&units=metric`);
  }

  public newSearchValue = new Subject<any>();

  getWeatherByInput(value) {
    this.newSearchValue.next(value)
    console.log('service:', value);
    
  }
}
