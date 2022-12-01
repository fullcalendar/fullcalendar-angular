import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarComponent } from './full-calendar.component';
import { OffscreenFragmentComponent } from './utils/offscreen-fragment.component';
import { TransportContainerComponent } from './utils/transport-container.component';

@NgModule({
  declarations: [
    FullCalendarComponent,
    OffscreenFragmentComponent,
    TransportContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    FullCalendarComponent
  ]
})
export class FullCalendarModule { }
