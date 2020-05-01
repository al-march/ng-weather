import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'http://api.openweathermap.org/data/2.5/weather?';
  token = '431996b7032bf54b8d64c0ba99ced49a';

  public cityWeather;

  constructor(private http: HttpClient) { }

  getWeather(city): Observable<any> {
    return this.http.get(`${this.url}q=${city}&appid=${this.token}&units=metric`).pipe(
      tap(info => this.cityWeather = info)
    );
  }

}
