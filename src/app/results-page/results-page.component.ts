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
  winnerIndex:number=0
  loserIndex:number=1
  focus='general';
  totalRank=[7.5,5.2]
  constructor(private data:DataServiceComponent){}

  ngOnInit(): void {
    this.cars=this.data.comparingArray
    this.calculateWinner();
    console.log(this.cars)
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
