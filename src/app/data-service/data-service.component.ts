import { Component, EventEmitter, Injectable, Output } from '@angular/core';

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

  public emitEvent(event:string):void{
    this.emmiter.emit(event)
  }
}
