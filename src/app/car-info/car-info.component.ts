import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/Model/Car';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  car:Car=new Car()
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<CarInfoComponent>,public dataService:DataServiceComponent) { }

  ngOnInit(): void {
    this.car = this.data.injectedCar
  }

  closeDialog(){
    this.dialogRef.close()
  }

  chooseCar(){
    this.dataService.chooseCarEvent(this.car);
  }

}
