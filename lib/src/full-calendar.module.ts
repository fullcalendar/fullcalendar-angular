import { NgModule } from '@angular/core';
import { FullCalendarComponent } from './full-calendar.component';

/**
 * @deprecated FullCalendarModule is deprecated.
 * Please import `FullCalendarComponent` directly.
 */
@NgModule({
  imports: [FullCalendarComponent],
  exports: [FullCalendarComponent]
})
export class FullCalendarModule { }
