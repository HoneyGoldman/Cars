import { Component, OnInit } from '@angular/core';
import { Car } from 'src/Model/Car';

@Component({
  selector: 'app-two-cars-comparing',
  templateUrl: './two-cars-comparing.component.html',
  styleUrls: ['./two-cars-comparing.component.css']
})
export class TwoCarsComparingComponent implements OnInit {
  tesla:Car = new Car()
  ionic:Car = new Car()
  constructor() { }
  
  ngOnInit(): void {
    this.tesla.logo  ='assets/Branding/tesla.png'
    this.tesla.model ='Dual Motor'
    this.tesla.year = 2023
    this.tesla.company ='טסלה מודל 3'
    this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png'
    this.ionic.logo = 'assets/Branding/hyundai.gif'
    this.ionic.model ='Sport Edition'
    this.ionic.year = 2023
    this.ionic.company = 'KIA EV6'
    this.ionic.ImagePath = 'assets/cars/kia ev6 23.png'
  }

}
