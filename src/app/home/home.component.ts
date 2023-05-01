import { Component, OnInit } from '@angular/core';
import { Car } from 'src/Model/Car';
import { DataServiceComponent } from '../data-service/data-service.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CarInfoV2Component } from '../car-info-v2/car-info-v2.component';
import { ResultCardComponent } from '../result-card/result-card.component';
import { ResultsPageComponent } from '../results-page/results-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars:Car[]=[]
  searchText:string = ''
  carsView:boolean = false
  tesla: Car = new Car()
  ev6: Car = new Car()
  constructor(private data:DataServiceComponent,private route: ActivatedRoute,private dialog:MatDialog) { }

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
    let car:Car= new Car();
    car.batteryRange=100
    car.company='Tesla'
    car.ImagePath='assets/tesla-model-s-2017.jpg'
    car.model='S'
    car.orderLink='Link'
    car.price=250000
    car.Rank = '4.5'
    for (let index = 0; index < 25; index++) {
      this.cars.push(car);
    }
    this.route.queryParams.subscribe(params=>{
      if(params.search){
        this.changeCarsView()
      }
    })
    // this.dialog.open(CarInfoV2Component)
  }

  changeCarsView(){
    this.carsView = ! this.carsView
    console.log('cars view '+this.carsView)
  }


  openResults(){
    this.data.comparingArray=[this.tesla,this.ev6]
    this.dialog.open(ResultsPageComponent).updateSize('100vh','100vh')
  }
}
