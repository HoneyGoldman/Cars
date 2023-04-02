import { Component, Input } from '@angular/core';
import { Car } from 'src/Model/Car';

@Component({
  selector: 'app-comparing-car-card',
  templateUrl: './comparing-car-card.component.html',
  styleUrls: ['./comparing-car-card.component.css']
})
export class ComparingCarCardComponent {

  @Input()
  car?:Car;

}
