import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from "../weather.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() city: string;

  isLoading: boolean = true;

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather(this.city).subscribe(value => {
      console.log(value);
      this.isLoading = false;
    });
    
  }
}
