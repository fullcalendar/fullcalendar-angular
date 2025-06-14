import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FullCalendarComponent } from './full-calendar.component';
import { OffscreenFragmentComponent } from './utils/offscreen-fragment.component';
import { TransportContainerComponent } from './utils/transport-container.component';

@NgModule({
  declarations: [
    FullCalendarComponent,
    TransportContainerComponent
  ],
  imports: [
    OffscreenFragmentComponent,
    CommonModule
  ],
  exports: [
    FullCalendarComponent
  ]
})
export class FullCalendarModule { }
