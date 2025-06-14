import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
