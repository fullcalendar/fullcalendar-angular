# Angular fullcalendar module
Jquery fullcalendar module [FullCalendar](https://fullcalendar.io) 

This package fullcalendar module for Angular 2, 4

[![latest](https://img.shields.io/npm/v/ng-fullcalendar/latest.svg)](http://npmjs.com/packages/ng-fullcalendar) 

Demo project in Stackblitz [DEMO](https://stackblitz.com/edit/ng-fullcalendar-demo)

Demo src [Demo](https://github.com/Jamaks/ng-fullcalendar/tree/master/src/demo)
## Getting started

Install via [npm](http://npmjs.com) :

```bash
npm install ng-fullcalendar
npm install fullcalendar@3.6.1
```

Then include the `FullCalendarModule` module in your module.

```typescript
import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
  imports: [
    BrowserModule,
    FullCalendarModule,
    ...
  ]
  ...
})
export class AppModule {}
```
For index.html style urls

```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.6.1/fullcalendar.min.css">
```

Import CalendarComponent in your component :

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor() {}
  ngOnInit() {
     this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
  }

}
```
then your app.component.html

```html
<div *ngIf="calendarOptions">
    <ng-fullcalendar #ucCalendar [options]="calendarOptions" (eventClick)="eventClick($event.detail)" (eventDrop)="updateEvent($event.detail)"
        (eventResize)="updateEvent($event.detail)" (clickButton)="clickButton($event.detail)"></ng-fullcalendar>
</div>
```

## Callbacks
Output 11 EventEmitters
```typescript
  clickButton
  eventClick
  eventDrop
  eventResize
  eventRender
  windowResize
  viewRender
  viewDestroy
  initialized
  select
  unselect
```
## API

More api docs: [Official fullcalendar docs](https://fullcalendar.io/docs/)

Example render new event
```typescript
 let el = {
   title: 'New event'
   start: '2017-10-07',
   end: '2017-10-10',
   ...
 }
 this.ucCalendar.fullCalendar('renderEvent', el);
 this.ucCalendar.fullCalendar('rerenderEvents');
```

## License

MIT
