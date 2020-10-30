import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { GalleryComponent } from './gallery.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    GalleryComponent,
  ],

  imports: [
    CommonModule,
    MatTabsModule,
    LightboxModule,
    RouterModule.forChild([
      { path: '', component: GalleryComponent }
    ])
  ],
  providers: [],
  entryComponents: [],

})
export class GalleryModule {

}