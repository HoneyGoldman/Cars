import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenericPipePipe } from './generic-pipe.pipe';
import { CarCardComponent } from './car-card/car-card.component';
import { NockOutComponent } from './nock-out/nock-out.component';
import { TwoCarsComparingComponent } from './two-cars-comparing/two-cars-comparing.component';
import { CarHomeCardComponent } from './car-home-card/car-home-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CarInfoComponent } from './car-info/car-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataServiceComponent } from './data-service/data-service.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ComparingCarCardComponent } from './comparing-car-card/comparing-car-card.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { ResultsCarCardComponent } from './results-car-card/results-car-card.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { ComparingGraphComponent } from './comparing-graph/comparing-graph.component';
import { CarInfoV2Component } from './car-info-v2/car-info-v2.component';
import { ParameterCardComponent } from './parameter-card/parameter-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenericPipePipe,
    CarCardComponent,
    NockOutComponent,
    TwoCarsComparingComponent,
    CarHomeCardComponent,
    SearchComponent,
    CarInfoComponent,
    DataServiceComponent,
    ComparingCarCardComponent,
    ResultsPageComponent,
    ResultsCarCardComponent,
    ResultCardComponent,
    ComparingGraphComponent,
    CarInfoV2Component,
    ParameterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
