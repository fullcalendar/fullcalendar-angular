import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { OptionsInput } from 'fullcalendar';
import { EventService } from '../event.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`.logger{
        z-index:99;
        top:100px;
        left:0px; 
        background-color: #80808075;
        color: green;
        height:200px;
        overflow: auto;
       }`]
})

export class HomeComponent implements OnInit {
    calendarOptions: OptionsInput;
    displayEvent: any;
    logger: any[] = [];
    events: any[] = [];
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    constructor(protected eventService: EventService) { }

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
          events: data,
        };
      });
    }
    clearEvents() {
      this.events = [];
    }
    loadAgain() {
      this.eventService.getEvents().subscribe(data => {
        this.events = data;
      });
    }
    clickButton(model: any) {
      this.displayEvent = model;
    }
    eventClick(model: any) {
      model = {
        event: {
          id: model.event.id,
          start: model.event.start,
          end: model.event.end,
          title: model.event.title,
          allDay: model.event.allDay
          // other params
        },
        duration: {}
      }
      this.displayEvent = model;
    }
    updateEvent(model: any) {
      model = {
        event: {
          id: model.event.id,
          start: model.event.start,
          end: model.event.end,
          title: model.event.title
          // other params
        },
        duration: {
          _data: model.duration._data
        }
      }
      this.displayEvent = model;
    }
    windowResize(model: any) {
      console.log('The calendar has adjusted to a window resize');
    }
    viewRender(model: any) {
      console.log('viewRender');
    }
    eventRender(model: any) {
      this.logger.push(model);
    }
    initialized() {
      console.log('Initialized compleate');
    }
    select(model: any) {
      console.log(model);
    }
    unselect(model: any) {
      console.log(model);
    }
}
