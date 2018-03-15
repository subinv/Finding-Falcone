import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-guess-fields',
  templateUrl: './guess-fields.component.html',
  styleUrls: ['./guess-fields.component.css']
})
export class GuessFieldsComponent implements OnInit {

  constructor(private _commonService: CommonService) { }
  erroMessage;
  planets: Array<Object>;
  vehicles: Array<Object>;


  ngOnInit() {
    this._commonService.getPlanet().subscribe(data => {
      this.planets = data;
      this._commonService.planetsArray = data;
    },
      err => this.erroMessage = <any>err);

    this._commonService.getVehicle().subscribe(data => {
      this.vehicles = data;
      this._commonService.vehiclesArray = data;
    }, err => this.erroMessage = <any>err);
  }


}
