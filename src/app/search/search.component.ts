import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Car } from 'src/Model/Car';
import { CarInfoComponent } from '../car-info/car-info.component';
import { DataServiceComponent } from '../data-service/data-service.component';

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
  tesla: Car = new Car()
  ionic: Car = new Car()
  showFilters = false;
  comparingCarArr:Car[]=[]
  constructor(public dialog: MatDialog, private data: DataServiceComponent) { }

  ngOnInit(): void {
    this.tesla.logo = '../../assets/Branding/tesla.png'
    this.tesla.Model = 'Dual Motor'
    this.tesla.year = 2023
    this.tesla.Company = 'טסלה מודל 3'
    this.tesla.BatteryRange = '320 ק"מ'
    this.tesla.OrderLink = 'https://www.tesla.com/model3'
    this.tesla.Price = '320,000 ILS'
    this.tesla.ImagePath = '../../assets/cars/tesla_m s 23.png'
    this.ionic.logo = '../../assets/Branding/hyundai.gif'
    this.ionic.Model = 'Sport Edition'
    this.ionic.year = 2023
    this.ionic.Company = 'קיה EV6'
    this.tesla.Rank = '4.5'
    this.ionic.ImagePath = '../../assets/cars/ioniq 5 23.jpg'
    this.company2Cars.set('Hyundai', [this.ionic, this.ionic, this.ionic, this.ionic])
    this.company2Cars.set('Tesla', [this.tesla, this.tesla, this.tesla, this.tesla, this.tesla, this.tesla, this.tesla])
    this.data.carEmmiter.subscribe(car=>{
      console.log('choose car '+JSON.stringify(car))
      if(this.comparingCarArr.length===2){
        this.comparingCarArr[0] = this.comparingCarArr[1]
        this.comparingCarArr[1] = car 
      }
      else{
        this.comparingCarArr.push(car)
      }
    })
  }


  closePopUp() {
    this.close.emit('close')
  }

  changeFiltersView() {
    this.showFilters = !this.showFilters
  }


  openCarInfoDialog(car: Car) {
    this.dialog.open(CarInfoComponent, {disableClose: false,
      data: {
        injectedCar: car
      }
    }).updateSize('80%','80%')
  }


  compare(){
    console.log('comparing!')
  }

}
