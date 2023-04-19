import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Car } from 'src/Model/Car';
import { CarInfoComponent } from '../car-info/car-info.component';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-car-info-v2',
  templateUrl: './car-info-v2.component.html',
  styleUrls: ['./car-info-v2.component.css']
})
export class CarInfoV2Component implements OnInit {
  car:Car=new Car()
  tesla: Car = new Car()
  focus:string= 'general'
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<CarInfoComponent>,public dataService:DataServiceComponent) { }

  ngOnInit(): void {
    this.car = this.data.injectedCar
    // this.tesla.logo = 'assets/Branding/tesla.png'
    // this.tesla.model = 'Model 3'
    // this.tesla.subModel ='Dual Motor'
    // this.tesla.year = 2023
    // this.tesla.company = 'Tesla'
    // this.tesla.seatsNumber=5
    // this.tesla.category ='משפחתי'
    // this.tesla.safetyRank = 8
    // this.tesla.batteryRange = 320
    // this.tesla.orderLink = 'https://www.tesla.com/model3'
    // this.tesla.price = 320000
    // this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png'
    // this.tesla.chargingSpeed = 50
    // this.tesla.zeroToHundred = 3.3
    // this.tesla.Rank = '4.5'
    // this.car = this.tesla
  }

  closeDialog(){
    this.dialogRef.close()
  }

  chooseCar(){
    this.dataService.chooseCarEvent(this.car);
  }

  getFocus(){
    return this.focus;
  }

  setFocus(focus:string){
    this.focus = focus;
  }

  gotoVendor(){
    window.open(this.car.orderLink)
  }
}
