import { Component, Input } from '@angular/core';
import { Car } from 'src/Model/Car';

@Component({
  selector: 'app-results-car-card',
  templateUrl: './results-car-card.component.html',
  styleUrls: ['./results-car-card.component.css']
})
export class ResultsCarCardComponent {
  @Input()
  car:Car=new Car();
  
}
