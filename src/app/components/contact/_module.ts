import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    ContactComponent,
  ],

  imports: [
    CommonModule,
    MatTabsModule,
    CarouselModule,
    RouterModule.forChild([
      { path: '', component: ContactComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class ContactModule {

}