import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/Model/Car';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-two-cars-comparing',
  templateUrl: './two-cars-comparing.component.html',
  styleUrls: ['./two-cars-comparing.component.css']
})
export class TwoCarsComparingComponent implements OnInit {
  tesla:Car = new Car()
  ev6:Car = new Car()
  constructor(private data: DataServiceComponent, private router: Router) { }
  
  ngOnInit(): void {
    this.tesla.logo = 'assets/Branding/tesla.png'
    this.tesla.model = 'Model 3'
    this.tesla.subModel ='Dual Motor'
    this.tesla.year = 2023
    this.tesla.company = 'Tesla'
    this.tesla.batteryRange = 320
    this.tesla.orderLink = 'https://www.tesla.com/model3'
    this.tesla.price = 320000
    this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png'
    this.tesla.chargingSpeed = 50
    this.tesla.seatsNumber = 5
    this.tesla.zeroToHundred = 3.3
    this.tesla.Rank = '4.5'
    this.tesla.safetyRank = 8
    this.ev6.chargingSpeed = 30
    this.ev6.safetyRank = 7
    this.ev6.price = 327500
    this.ev6.orderLink = 'https://kia-israel.co.il/רכב/ev6'
    this.ev6.logo = 'assets/Branding/kia.png'
    this.ev6.model = 'EV6'
    this.ev6.subModel ='Sport Edition'
    this.ev6.year = 2023
    this.ev6.company = 'KIA'
    this.ev6.seatsNumber = 5
    this.ev6.zeroToHundred = 4.2
    this.ev6.batteryRange = 400
    this.ev6.ImagePath = 'assets/cars/kia ev6 23.png'
  }


  openComparison(){
      // this.data.comparingArray = [this.tesla,this.ev6]
      // this.router.navigateByUrl('results')
      this.router.navigateByUrl('/?search=true')
  }

}
