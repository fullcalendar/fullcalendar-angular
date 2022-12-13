
# FullCalendar Angular Component

The official [Angular](https://angular.io/) Component for [FullCalendar](https://fullcalendar.io)

## Installation

Install the Angular connector, the core package, and any plugins (like [daygrid](https://fullcalendar.io/docs/month-view)):

```sh
npm install @fullcalendar/angular @fullcalendar/core @fullcalendar/daygrid
```

## Usage

First, connect `FullCalendarModule` to you app module:

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule // register FullCalendar with your app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then, use the `full-calendar` component, passing-in an [options](https://fullcalendar.io/docs#toc) object:

```js
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: `
    <div>
      <h1>Demo App</h1>
      <full-calendar [options]="calendarOptions"></full-calendar>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };
}
```

You can even pass in nested templates:

```html
<full-calendar [options]="calendarOptions">
  <ng-template #eventContent let-arg>
    <b>{{eventInfo.timeText}}</b>
    <i>{{eventInfo.event.title}}</i>
  </ng-template>
</full-calendar>
```

## Supported Angular Versions

`@fullcalendar/angular` version 6 supports Angular 12 - 15

## Links

- [Documentation](https://fullcalendar.io/docs/angular)
- [Example Project](https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/angular)
- [Contributor Guide](CONTRIBUTORS.md)

## History

This project is built and maintained by [irustm](https://github.com/irustm) in partnership with the maintainers of FullCalendar. The project was originally called `ng-fullcalendar` which can still be [found on NPM](https://www.npmjs.com/package/ng-fullcalendar).
