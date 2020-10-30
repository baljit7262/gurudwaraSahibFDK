import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DonateComponent } from './donate.component';

@NgModule({
  declarations: [
    DonateComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DonateComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class DonateModule {

}