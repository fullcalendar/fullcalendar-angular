# Angular fullcalendar module
Angular fullcalendar module [FullCalendar](https://fullcalendar.io) 

This package wraps the fullcalendar module for Angular.

[![latest](https://img.shields.io/npm/v/ng-fullcalendar/latest.svg)](http://www.npmjs.com/package/ng-fullcalendar) 
[![Npm Downloads](https://img.shields.io/npm/dt/ng-fullcalendar.svg?maxAge=2592000)](https://www.npmjs.com/package/ng-fullcalendar)

[ng-fullcalendar v1 with JQuery see this](https://github.com/ng-fullcalendar/ng-fullcalendar/tree/v1)

Demo project in Stackblitz [DEMO](https://stackblitz.com/edit/ng-fullcalendar2-demo)


## Getting started

Install via [npm](http://npmjs.com) :

```bash
npm install @fullcalendar/angular
```

Then include the `FullCalendarModule` module in your module.

```typescript
import { FullCalendarModule } from '@fullcalendar/angular';

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



Import CalendarComponent in your component :

```typescript
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: CalendarComponent;
  ngOnInit() {
    this.options = {
      editable: true,
      events: [{
        title: 'Long Event',
        start: this.yearMonth + '-07',
        end: this.yearMonth + '-10'
      }],
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: function() {
            alert('clicked the custom button!');
          }
        }
      },
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      plugins: [ dayGridPlugin, interactionPlugin ]
    };

  }
  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }
  dateClick(model) {
    console.log(model);
  }
  updateEvents() {
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
}
```
then your app.component.html

```html
<ng-container *ngIf="options">
  <full-calendar
    #fullcalendar
    [eventsModel]="eventsModel"
    [options]="options"
    (dateClick)="dateClick($event)"
    (eventDragStop)="eventDragStop($event)"
    (eventClick)="eventClick($event)"
    (clickButton)="clickButton($event)"
  ></full-calendar>
</ng-container>
```

## Events binging

From 1.5.0 version new feature `[(eventsModel)]="events"` two events binding

```html
<ng-container *ngIf="options">
  <full-calendar
    [eventsModel]="eventsModel"
    [options]="options"
  ></full-calendar>
</ng-container>
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

## API

More api docs: [Official fullcalendar docs](https://fullcalendar.io/docs/)


## License

MIT
