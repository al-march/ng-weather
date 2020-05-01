import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  changeSearch(search) {
    this.weatherService.getWeather(search).subscribe()
    this.search = ''
  }
}
