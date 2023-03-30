import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/Model/Car';

@Component({
  selector: 'app-car-home-card',
  templateUrl: './car-home-card.component.html',
  styleUrls: ['./car-home-card.component.css']
})
export class CarHomeCardComponent implements OnInit {
  @Input()
  car!:Car

  constructor() { }

  ngOnInit(): void {
  }

}
