# Angular fullcalendar module
Jquery fullcalendar module [FullCalendar](https://fullcalendar.io) 

This package wraps the fullcalendar module for Angular.

[![latest](https://img.shields.io/npm/v/ng-fullcalendar/latest.svg)](http://www.npmjs.com/package/ng-fullcalendar) 
[![Npm Downloads](https://img.shields.io/npm/dt/ng-fullcalendar.svg?maxAge=2592000)](https://www.npmjs.com/package/ng-fullcalendar)

Demo project in Stackblitz [DEMO](https://stackblitz.com/edit/ng-fullcalendar-demo)

Demo src [Demo](https://github.com/Jamaks/ng-fullcalendar-demo)

This package support Angular 6, see please demo src.

## TODO

 - Upgrate this package to fullcalendar version 4! Stop Jquery!

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

Or you can add this in your SCSS pipe 

```scss
@import "~/fullcalendar/dist/fullcalendar.css";
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

## Events binging

From 1.5.0 version new feature `[(eventsModel)]="events"` two events binding

```html
<div *ngIf="calendarOptions">
    <ng-fullcalendar #ucCalendar [options]="calendarOptions" [(eventsModel)]="events"></ng-fullcalendar>
</div>
```

```ts

ngOnInit() {
  this.eventService.getEvents().subscribe(data => {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      selectable: true,
      events: [],
      };
  });
}
clearEvents() {
  this.events = [];
}
loadEvents() {
  this.eventService.getEvents().subscribe(data => {
    this.events = data;
  });
}

```

## Callbacks
Output 27 EventEmitters
```typescript
    eventDrop
    eventResize
    eventResizeStart
    eventResizeStop
    eventClick
    clickButton
    windowResize
    viewRender
    eventAfterRender
    eventAfterAllRender
    viewDestroy
    eventRender
    eventDestroy
    eventMouseOver
    eventMouseOut
    initialized
    select
    unselect
    dayClick
    navLinkDayClick
    navLinkWeekClick
    eventDragStart
    eventDragStop
    drop
    eventReceive
    dayRender
    resourceRender

```
## API

More api docs: [Official fullcalendar docs](https://fullcalendar.io/docs/)

Example render new event
```typescript
 let el = {
   title: 'New event',
   start: '2017-10-07',
   end: '2017-10-10',
   ...
 }
 this.ucCalendar.fullCalendar('renderEvent', el);
 this.ucCalendar.fullCalendar('rerenderEvents');
```


## Thanks

- Aleksandr Sobakar ([@xaosaki](https://github.com/xaosaki))
- Mario Mol ([@mariohmol](https://github.com/mariohmol))
- ([@vz28bh](https://github.com/vz28bh))

## License

MIT
