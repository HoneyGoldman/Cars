import { Component, OnInit } from '@angular/core';
import { Car } from 'src/Model/Car';
import { DataServiceComponent } from '../data-service/data-service.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars:Car[]=[]
  searchText:string = ''
  carsView:boolean = false
  constructor(private data:DataServiceComponent,private route: ActivatedRoute) { }

  ngOnInit(): void {
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
  }

  changeCarsView(){
    this.carsView = ! this.carsView
    console.log('cars view '+this.carsView)
  }


}
