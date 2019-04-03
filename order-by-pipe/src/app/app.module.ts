import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataService} from './services/data.service';
import {OrderByPipe} from './pipes/order-by.pipe';
import {HomeApplianceComponent} from './components/home-appliance/home-appliance.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    HomeApplianceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
