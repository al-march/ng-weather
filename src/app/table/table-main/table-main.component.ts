import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss']
})
export class TableMainComponent implements OnInit {

  @Input() weather;
  @Input() city;
  @Input() wind;
  @Input() params;

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  setIcon(weather) {
    switch (weather) {
      case 'Clouds':
        return 'icon-7'
      case 'Rain':
        return 'icon-12'
      case 'Snow':
        return 'icon-14'
      default:
        return 'icon-1'
    }
  }

}
