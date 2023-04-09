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
  winner:Car=new Car()
  loser:Car=new Car()
  constructor(private data:DataServiceComponent){}

  ngOnInit(): void {
    this.cars=this.data.comparingArray
    this.calculateWinner();
    console.log(this.cars)
  }

  calculateWinner(){
    this.winner = this.cars[0]
    this.loser = this.cars[1]
  }

}
