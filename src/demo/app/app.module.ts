import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from 'ng-fullcalendar';

import { AppRoutingModule } from './routing.module';
import { EventService } from './event.service';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FullCalendarModule ],
  declarations: [ AppComponent, HomeComponent, SecondComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ EventService ]
})
export class AppModule { }
