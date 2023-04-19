import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parameter-card',
  templateUrl: './parameter-card.component.html',
  styleUrls: ['./parameter-card.component.css']
})
export class ParameterCardComponent {

  @Input()
  value:any;
  @Input()
  parameterName:string='';
  @Input()
  parameterUnits:string='';
  @Input()
  imagePath:string='';
}
