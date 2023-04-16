import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/Model/Car';

@Component({
  selector: 'app-comparing-graph',
  templateUrl: './comparing-graph.component.html',
  styleUrls: ['./comparing-graph.component.css']
})
export class ComparingGraphComponent implements OnInit{
  @Input()
  cars:Car[]=[];
  @Input()
  paramName:string=''
  @Input()
  bottomText:string=''
  @Input()
  values:number[]=[];
  @Input()
  bigIsGood:boolean=true

  tesla: Car = new Car()
  ev6: Car = new Car()
  ngOnInit(): void {
    // this.tesla.logo = 'assets/Branding/tesla.png'
    // this.tesla.model = 'Model 3'
    // this.tesla.subModel ='Dual Motor'
    // this.tesla.year = 2023
    // this.tesla.company = 'Tesla'
    // this.tesla.batteryRange = 320
    // this.tesla.orderLink = 'https://www.tesla.com/model3'
    // this.tesla.price = 320000
    // this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png'
    // this.tesla.chargingSpeed = 50
    // this.ev6.chargingSpeed = 30
    // this.ev6.logo = 'assets/Branding/kia.png'
    // this.ev6.model = 'EV6'
    // this.ev6.subModel ='Sport Edition'
    // this.ev6.year = 2023
    // this.ev6.company = 'KIA'
    // this.tesla.Rank = '4.5'
    // this.ev6.batteryRange = 400
    // this.ev6.ImagePath = 'assets/cars/kia ev6 23.png'
    // this.cars[0] = this.tesla
    // this.cars[1] = this.ev6
    // console.log(JSON.stringify(this.cars)+JSON.stringify(this.paramName)+JSON.stringify(this.values))
  }
}
