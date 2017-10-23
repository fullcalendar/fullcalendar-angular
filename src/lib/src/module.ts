import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';

@NgModule({
    declarations: [CalendarComponent],
    exports: [CalendarComponent],
})
export class FullCalendarModule {}
