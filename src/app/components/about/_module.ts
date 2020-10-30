import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AboutComponent,
  ],

  imports: [
    CommonModule,
    MatTabsModule,
    CarouselModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class AboutModule {

}