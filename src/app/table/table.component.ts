import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  weatherData: any;
  newCity: any;

  constructor(private ws: WeatherService) { }

  ngOnInit(): void {
    this.ws.newSearchValue
      .subscribe(city => {
        this.getWeather(city)
      })

    this.getWeather('new york')

  }
  getWeather(city) {
    this.ws.getWeather(city)
      .subscribe(res => this.weatherData = res, null, () => console.log(this.weatherData))
  }
}
