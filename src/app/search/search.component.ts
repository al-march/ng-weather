import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: string = '';

  constructor(private ws: WeatherService) { }

  ngOnInit(): void {
  }

  changeSearch(search) {
    this.search = ''
    this.ws.getWeatherByInput(search)
  }
}
