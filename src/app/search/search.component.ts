import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Car } from 'src/Model/Car';
import { DataServiceComponent } from '../data-service/data-service.component';
import { Router } from '@angular/router';
import { CarInfoV2Component } from '../car-info-v2/car-info-v2.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  close = new EventEmitter<string>();
  searchText = ''
  company2Cars: Map<string, Car[]> = new Map();
  shownData: Map<string, Car[]> = new Map();
  tesla: Car = new Car()
  ev6: Car = new Car()
  showFilters = false;
  comparingCarArr: Car[] = []
  constructor(public dialog: MatDialog, private data: DataServiceComponent, private router: Router) { }

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
    this.company2Cars.set('KIA', [this.ev6, this.ev6, this.ev6, this.ev6])
    this.company2Cars.set('Tesla', [this.tesla, this.tesla, this.tesla, this.tesla, this.tesla, this.tesla, this.tesla])
    this.data.carEmmiter.subscribe(car => {
      console.log('choose car ' + JSON.stringify(car))
      if (this.comparingCarArr.length === 2) {
        this.comparingCarArr[0] = this.comparingCarArr[1]
        this.comparingCarArr[1] = car
      }
      else {
        this.comparingCarArr.push(car)
      }
    })
    this.shownData = this.company2Cars
    this.comparingCarArr = this.data.comparingArray
  }


  closePopUp() {
    this.close.emit('close')
    this.router.navigateByUrl('/')
  }

  changeFiltersView() {
    this.searchText = ''
    this.filter()
    this.showFilters = !this.showFilters
  }


  openCarInfoDialog(car: Car) {
    this.dialog.open(CarInfoV2Component, {
      disableClose: false,
      data: {
        injectedCar: car
      }
    }).updateSize('100vw', '100%')
  }


  compare() {
    if (this.comparingCarArr.length === 2) {
      this.data.comparingArray = this.comparingCarArr
      this.router.navigateByUrl('results')
    }
  }

  removeCar(index: number) {
    this.comparingCarArr.splice(index, 1)
    console.log(this.comparingCarArr)
  }

  filter() {
    let results: Map<string, Car[]> = new Map();
    this.company2Cars.forEach((cars: Car[], company: string) => {
      let carArray: Car[] = []
      cars.forEach(car => {
        if (car.company?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          car.model?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          String(car.year).toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
        ) {
          carArray.push(car)
        }
        if (carArray.length !== 0) {
          results.set(company, carArray);
        }
      });
    });
    this.shownData = results
  }

  filterByCompany(company: string) {
    this.searchText = company
    this.filter()
  }


}
