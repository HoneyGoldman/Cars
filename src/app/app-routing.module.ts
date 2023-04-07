import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results', component: ResultsPageComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
