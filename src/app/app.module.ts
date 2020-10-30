
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { AppComponent } from './app.component';
import { MasterComponent } from './layout/master/master.component';
import { PublicComponent } from './layout/public/public.component';
import { SharedModule } from './shared/shared.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PublicComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    MatSidenavModule,
    MatSelectModule,
    MatIconModule,
    MatIconModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
