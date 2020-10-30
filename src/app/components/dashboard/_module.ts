import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    DashboardComponent,
  ],

  imports: [
    CommonModule,
    MatTabsModule,
    // CarouselModule,
    // WavesModule,
    CarouselModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class DashboardModule {

}