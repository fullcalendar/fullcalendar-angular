import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCallendarModule } from 'ng-fullcalendar';

import { EventSesrvice } from './event.service';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FullCallendarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ EventSesrvice ]
})
export class AppModule { }
