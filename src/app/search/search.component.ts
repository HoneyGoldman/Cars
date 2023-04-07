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
  shownData: Map<string, Car[]> = new Map();
  tesla: Car = new Car()
  ionic: Car = new Car()
  showFilters = false;
  comparingCarArr:Car[]=[]
  constructor(public dialog: MatDialog, private data: DataServiceComponent) { }

  ngOnInit(): void {
    this.tesla.logo = 'assets/Branding/tesla.png'
    this.tesla.Model = '3 Dual Motor'
    this.tesla.year = 2023
    this.tesla.Company = 'Tesla'
    this.tesla.BatteryRange = '320 ק"מ'
    this.tesla.OrderLink = 'https://www.tesla.com/model3'
    this.tesla.Price = '320,000 ILS'
    this.tesla.ImagePath = 'assets/cars/tesla_m s 23.png'
    this.ionic.logo = 'assets/Branding/hyundai.gif'
    this.ionic.Model = 'EV6 Sport Edition'
    this.ionic.year = 2023
    this.ionic.Company = 'Hyundai'
    this.tesla.Rank = '4.5'
    this.ionic.ImagePath = 'assets/cars/ioniq 5 23.jpg'
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
    this.shownData = this.company2Cars
  }


  closePopUp() {
    this.close.emit('close')
  }

  changeFiltersView() {
    this.searchText = ''
    this.filter()
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

  removeCar(index:number){
      this.comparingCarArr.splice(index,1)
      console.log(this.comparingCarArr)
  }

  filter(){
    let results: Map<string, Car[]> = new Map();
    this.company2Cars.forEach((cars:Car[],company:string) => {
      let carArray:Car[]=[]
        cars.forEach(car=>{
          if(car.Company?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          car.Model?.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
          String(car.year).toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
          ){
            carArray.push(car)
          }
          if(carArray.length !==0){
            results.set(company,carArray);
          }
        });
    });
    this.shownData = results
  }

  filterByCompany(company:string){
    this.searchText = company
    this.filter()
  }

}
