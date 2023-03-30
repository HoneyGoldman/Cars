import { Component, OnInit } from '@angular/core';
import { Car } from 'src/Model/Car';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars:Car[]=[]
  searchText:string = ''
  carsView:boolean = false
  constructor(private data:DataServiceComponent) { }

  ngOnInit(): void {
    let car:Car= new Car();
    car.BatteryRange='100Km'
    car.Company='Tesla'
    car.ImagePath='../../assets/tesla-model-s-2017.jpg'
    car.Model='S'
    car.OrderLink='Link'
    car.Price='250,000 ILS'
    car.Rank = '4.5'
    for (let index = 0; index < 25; index++) {
      this.cars.push(car);
    }
  }

  changeCarsView(){
    this.carsView = ! this.carsView
    console.log('cars view '+this.carsView)
  }


}
