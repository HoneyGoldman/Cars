import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { Car } from 'src/Model/Car';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})

@Injectable({
  providedIn:'root'
})
export class DataServiceComponent {

  @Output()
  emmiter:EventEmitter<string>=new EventEmitter<string>()

  @Output()
  carEmmiter:EventEmitter<Car>=new EventEmitter<Car>()

  public emitEvent(event:string):void{
    this.emmiter.emit(event)
  }

  public chooseCarEvent(car:Car):void{
    this.carEmmiter.emit(car)
  }

  public comparingArray:Car[]=[]
}
