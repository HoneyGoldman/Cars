import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/Model/Car';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  cars:Car[]=[];
  winnerIndex:number=1
  looserIndex:number=0
  winningParameters:number = 7
  focus='general';
  totalRank=[7.5,5.2]
  constructor(private data:DataServiceComponent){}
  tesla: Car = new Car()
  ev6: Car = new Car()
  ngOnInit(): void {
    this.cars=this.data.comparingArray
    this.calculateWinner();
    // console.log(this.cars)
    // this.tesla.logo = 'assets/Branding/tesla.png'
    // this.tesla.model = 'Model 3'
    // this.tesla.subModel ='Dual Motor'
    // this.tesla.year = 2023
    // this.tesla.company = 'Tesla'
    // this.tesla.batteryRange = 320
    // this.tesla.orderLink = 'https://www.tesla.com/model3'
    // this.tesla.price = 320000
    // this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png'
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
  }

  calculateWinner(){

  }

  getFocus(){
    return this.focus;
  }

  setFocus(focus:string){
    this.focus = focus;
  }

}
