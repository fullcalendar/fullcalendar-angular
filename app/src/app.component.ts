import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { CalendarOptions, Calendar, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg, EventDragStopArg } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { startOfDay, isSameDay } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    // ... your other options
    nowIndicator: true,
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), 
    
  }
  eventsModel: any;
  showPopup: boolean = false;
  selectedDate: string = '';
  mouseDownTime: number = 0;
  // @ViewChild('fullcalendar') fullcalendar?: FullCalendarComponent;
  @ViewChild('fullcalendar', { static: false })
  calendar!: FullCalendarComponent;

  ngOnInit() {
    // need for load calendar bundle first
    forwardRef(() => Calendar);

    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      editable: true,
      customButtons: {
        myCustomButton: {
          text: 'custom!',
          click: function () {
            alert('clicked the custom button!');
          }
        }
      },
      headerToolbar: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },


      dateClick: this.handleDateClick.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventDragStop: this.handleEventDragStop.bind(this)
    };
  }

  goToToday() {
    this.calendar.getApi().today();
  }

  handleDateClick(arg: DateClickArg) {
    if (Date.now() - this.mouseDownTime > 1000) { // 1 second for a hold action
      this.selectedDate = arg.dateStr;
      this.showPopup = true;
    }
  }

  closePopup() {
    this.showPopup = false;
  }

  onMouseDown() {
    this.mouseDownTime = Date.now();
  }

  onMouseUp(arg: DateClickArg) {
    if (Date.now() - this.mouseDownTime > 1000) {
      this.handleDateClick(arg);
    }
  }


  handleEventClick(arg: EventClickArg) {
    console.log(arg);
  }

  handleEventDragStop(arg: EventDragStopArg) {
    console.log(arg);
  }

  updateHeader() {
    this.calendarOptions!.headerToolbar = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }

  updateEvents() {
    const nowDate = new Date();
    const yearMonth = nowDate.getUTCFullYear() + '-' + (nowDate.getUTCMonth() + 1);

    this.calendarOptions!.events = [{
      title: 'Updated Event',
      start: yearMonth + '-08',
      end: yearMonth + '-10'
    }];
  }






// ... inside your component
today: Date = startOfDay(new Date());



renderDayCell(arg: any) {
  const cellDate = startOfDay(new Date(arg.date));
  if (isSameDay(this.today, cellDate)) {
    arg.el.style.backgroundColor = '#3A81C7'; // Apply a light gray background for today
  }
}

highlightToday(arg: any) {
  if (arg.date.getUTCDate() === new Date().getUTCDate() &&
      arg.date.getUTCMonth() === new Date().getUTCMonth() &&
      arg.date.getUTCFullYear() === new Date().getUTCFullYear()) {
    arg.el.style.backgroundColor = 'rgba(224, 224, 224, 0.5)';  // Or any color you prefer
  }
}

}

