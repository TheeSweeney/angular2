import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent
    //any time a new componenet is added it will also be placed in this list
    //if we add it through the cli using the command `ng g component [component-name]` it will automatically add it here and create a component file with a boilerplate test suite, css, html, and ts file 
  ],
  imports: [
    BrowserModule,
    HttpModule
    //this list modules that will be imported into the app
  ],
  providers: [],//any injectable services will be added here
  bootstrap: [AppComponent]//which component is the top level component?
})
export class AppModule { }
