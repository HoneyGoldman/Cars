import { Component, Input } from '@angular/core';
import { Car } from 'src/Model/Car';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent {
  @Input()
  winner?:boolean
  @Input()
  car?:Car
  @Input()
  totalRank?:number
}
