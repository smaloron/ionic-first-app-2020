import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.page.html',
  styleUrls: ['./temperature-converter.page.scss'],
})
export class TemperatureConverterPage implements OnInit {

  public celciusValue = 0;

  constructor() { }

  ngOnInit() {
  }

}
