import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullCalendarComponent } from './full-calendar.component';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

const DEFAULT_OPTIONS = {
  plugins: [dayGridPlugin, interactionPlugin],
  editable: true,
};

describe('FullCalendarComponent', () => {
  let component: FullCalendarComponent;
  let fixture: ComponentFixture<FullCalendarComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCalendarComponent);
    component = fixture.componentInstance;
    component.options = DEFAULT_OPTIONS;
    fixture.detectChanges(); // necessary for initializing change detection system
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(isHeaderToolbarRendered(fixture)).toBe(true);
  });

  it('should unmount and call destroy', () => {
    fixture.destroy();
    expect(isHeaderToolbarRendered(fixture)).toBe(false);
  });

  it('should expose an API', () => {
    const calendarApi = component.getApi();
    expect(calendarApi).toBeTruthy();

    const newDate = new Date(Date.UTC(2000, 0, 1));
    calendarApi.gotoDate(newDate);
    expect(calendarApi.getDate().valueOf()).toBe(newDate.valueOf());
  });

});


// some tests need a wrapper component

@Component({
  template: `
    <full-calendar [options]="calendarOptions"></full-calendar>
  `,
  standalone: true,
  imports: [FullCalendarComponent]
})
class HostComponent {
  calendarOptions = {
    ...DEFAULT_OPTIONS,
    weekends: true,
    events: [buildEvent()] as any,
    viewDidMount: this.handleViewDidMount.bind(this),
    eventDidMount: this.handleEventDidMount.bind(this)
  };
  viewSkeletonRenderCnt = 0;
  eventRenderCnt = 0;
  something = 999;

  disableWeekends() {
    this.calendarOptions.weekends = false;
  }

  changeSomething() {
    this.something++;
  }

  addEventReset() {
    this.calendarOptions.events = this.calendarOptions.events.concat([ buildEvent() ]);
  }

  setEventFunc(timeout: number) {
    this.calendarOptions.events = function(info: any, successCallback: any) {
      setTimeout(function() {
        successCallback([ buildEvent() ]);
      }, timeout);
    };
  }

  handleViewDidMount() {
    this.viewSkeletonRenderCnt++;
  }

  handleEventDidMount() {
    this.eventRenderCnt++;
  }
}

describe('HostComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // necessary for initializing change detection system
  });

  it('should handle prop changes', () => {
    expect(isWeekendsRendered(fixture)).toBe(true);
    component.disableWeekends();
    fixture.detectChanges();
    expect(isWeekendsRendered(fixture)).toBe(false);
  });

  it('should handle prop changes that don\'t rerender any DOM', () => {
    const headerEl = getHeaderToolbarEl(fixture);
    expect(component.viewSkeletonRenderCnt).toBe(1);
    component.changeSomething();
    fixture.detectChanges();
    expect(getHeaderToolbarEl(fixture)).toBe(headerEl);
    expect(component.viewSkeletonRenderCnt).toBe(1);
  });

  it('should emit an event', () => {
    expect(component.viewSkeletonRenderCnt).toBeGreaterThan(0);
  });

  it('should render new events with prop change', () => {
    expect(component.eventRenderCnt).toBe(1);
    component.addEventReset();
    fixture.detectChanges();
    expect(component.eventRenderCnt).toBe(3); // +2 (the two events were freshly rendered)
  });

  it('should handle new events async function', (done) => {
    expect(component.eventRenderCnt).toBe(1);
    component.setEventFunc(100);
    fixture.detectChanges();
    setTimeout(function() {
      expect(component.eventRenderCnt).toBe(2); // +1
      done();
    }, 200);
  });

});


// uses the separate `events` input

@Component({
  template: `
    <full-calendar
      [options]="calendarOptions"
      [events]="events"
    ></full-calendar>
  `,
  standalone: true,
  imports: [FullCalendarComponent]
})
class HostComponentWithEventAttr {
  calendarOptions: CalendarOptions = {
    ...DEFAULT_OPTIONS,
    eventDidMount: this.handleEventDidMount.bind(this)
  };
  events = [buildEvent()];
  eventRenderCnt = 0;

  handleEventDidMount() {
    this.eventRenderCnt++;
  }

  addEventReset() {
    this.events = this.events.concat([buildEvent()]);
  }
}

describe('HostComponentWithEventAttr', () => {
  let component: HostComponentWithEventAttr;
  let fixture: ComponentFixture<HostComponentWithEventAttr>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponentWithEventAttr);
    component = fixture.componentInstance;
    fixture.detectChanges(); // necessary for initializing change detection system
  });

  it('should render events', () => {
    expect(component.eventRenderCnt).toBe(1);
    component.addEventReset();
    fixture.detectChanges();
    expect(component.eventRenderCnt).toBe(3); // +2 (the two events were freshly rendered)
  });
})


// has content-injection template

@Component({
  template: `
    <full-calendar #calendar [options]="calendarOptions">
      <ng-template #eventContent let-arg>
        @if (isBold) {
          <b>{{ arg.event.title }}</b>
        }
        @if (!isBold) {
          <i>{{ arg.event.title }}</i>
        }
      </ng-template>
    </full-calendar>
    `,
  standalone: true,
  imports: [FullCalendarComponent]
})
class HostComponentWithTemplate {
  calendarOptions = {
    ...DEFAULT_OPTIONS,
    events: [buildEvent()]
  };
  isBold = false;

  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;

  turnBold() {
    this.isBold = true;
  }
}

describe('HostComponentWithTemplate', () => {
  let component: HostComponentWithTemplate;
  let fixture: ComponentFixture<HostComponentWithTemplate>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponentWithTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render event with custom template', () => {
    const eventEl = getFirstEventEl(fixture);
    expect(eventEl.querySelectorAll('i').length).toBe(1);
    expect(eventEl.querySelectorAll('b').length).toBe(0);

    component.turnBold();
    fixture.detectChanges();

    expect(eventEl).toBe(getFirstEventEl(fixture));
    expect(eventEl.querySelectorAll('i').length).toBe(0);
    expect(eventEl.querySelectorAll('b').length).toBe(1);
  });

  it('should custom-render going forward-back', () => {
    const calendar = component.calendarComponent!.getApi();

    let eventEl = getFirstEventEl(fixture);
    expect(eventEl.querySelectorAll('i').length).toBe(1);
    expect(eventEl.querySelectorAll('b').length).toBe(0);

    calendar.next();
    calendar.prev();

    eventEl = getFirstEventEl(fixture);
    expect(eventEl.querySelectorAll('i').length).toBe(1);
    expect(eventEl.querySelectorAll('b').length).toBe(0);
  });

  it('should custom-render DnD-able daygrid list-like event', () => {
    let eventEl = getFirstEventEl(fixture);
    expect(eventEl).toHaveClass('fc-daygrid-dot-event');
    expect(typeof eventEl.fcSeg).toBe('object');
  })
})


// some tests need a wrapper component with DEEP COMPARISON

@Component({
  template: `
    <full-calendar
      [deepChangeDetection]="true"
      [options]="calendarOptions"
    ></full-calendar>
  `,
  standalone: true,
  imports: [FullCalendarComponent]
})
class DeepHostComponent {

  calendarOptions = {
    ...DEFAULT_OPTIONS,
    events: [buildEvent()] as any,
    eventDidMount: this.handleEventDidMount.bind(this)
  };
  eventRenderCnt = 0;

  addEventAppend() {
    this.calendarOptions.events.push(buildEvent());
  }

  updateEventTitle(title: string) {
    this.calendarOptions.events[0].title = title;
  }

  setEventFunc(timeout: number) {
    this.calendarOptions.events = function(info: any, successCallback: any) {
      setTimeout(function() {
        successCallback([ buildEvent() ]);
      }, timeout);
    };
  }

  handleEventDidMount() {
    this.eventRenderCnt++;
  }
}

describe('DeepHostComponent', () => {
  let component: DeepHostComponent;
  let fixture: ComponentFixture<DeepHostComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // necessary for initializing change detection system
  });

  it('should render new appended event', () => {
    expect(component.eventRenderCnt).toBe(1);
    component.addEventAppend();
    fixture.detectChanges();
    expect(component.eventRenderCnt).toBe(3); // +2 (the two events were freshly rendered)
  });

  it('should render event mutation', () => {
    expect(component.eventRenderCnt).toBe(1);

    component.updateEventTitle('another title');
    fixture.detectChanges();
    expect(getFirstEventTitle(fixture)).toBe('another title');
    expect(component.eventRenderCnt).toBe(2); // +1

    component.updateEventTitle('another title');
    fixture.detectChanges();
    expect(getFirstEventTitle(fixture)).toBe('another title');
    expect(component.eventRenderCnt).toBe(2); // +0 (didn't rerender anything)
  });

  it('should handle new events async function', (done) => {
    expect(component.eventRenderCnt).toBe(1);
    component.setEventFunc(100);
    fixture.detectChanges();
    setTimeout(function() {
      expect(component.eventRenderCnt).toBe(2); // +1
      done();
    }, 200);
  });

});


// Integration test
// https://github.com/fullcalendar/fullcalendar/issues/7058

@Component({
  template: `
    <full-calendar #calendar [options]="calendarOptions">
      <ng-template #eventContent let-arg>
        <b>{{ arg.event.title }}</b>
      </ng-template>
    </full-calendar>
  `,
  standalone: true,
  imports: [FullCalendarComponent]
})
class CrapComponent {
  private defaultHeaderToolbar = {
    left: '',
    center: 'title',
    right: '',
  }

  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    plugins: [listPlugin],
    headerToolbar: this.defaultHeaderToolbar,
    initialView: 'listWeek',
    events: [buildEvent()] as any,
    datesSet: this.onDatesSet.bind(this)
  };

  onDatesSet() {
    this.calendarComponent!.getApi().setOption('headerToolbar', this.defaultHeaderToolbar)
  }
}

describe('with list-view, customContent, and state mutation in datesSet', () => {
  let component: CrapComponent;
  let fixture: ComponentFixture<CrapComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // necessary for initializing change detection system
  });

  it('doesn\'t throw any errors', () => {
    expect(Boolean(fixture)).toBe(true)
  })
})


// Integration test: resource-timeline
// https://github.com/fullcalendar/fullcalendar/issues/7105

@Component({
  template: `
    <full-calendar #calendar [options]="calendarOptions">
      <ng-template #resourceLabelContent let-arg>
        <b>{{ arg.resource.title }}</b>
      </ng-template>
    </full-calendar>
  `,
  standalone: true,
  imports: [FullCalendarComponent]
})
class LameComponent {
  calendarOptions: CalendarOptions = {
    plugins: [resourceTimelinePlugin],
    initialView: 'resourceTimelineWeek',
    resources: [{ id: 'a', title: 'a' }]
  };

  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;

  removeResource() {
    const resource = this.calendarComponent!.getApi().getResourceById('a')!
    resource.remove()
  }
}

describe('with resource-timeline view', () => {
  let component: LameComponent;
  let fixture: ComponentFixture<LameComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // necessary for initializing change detection system
  });

  it('doesn\'t throw any errors when removing a resource', () => {
    component.removeResource()
    expect(Boolean(fixture)).toBe(true)
  })
})


// Integration test: resource-timegrid
// https://github.com/fullcalendar/fullcalendar/issues/7182


@Component({
  template: `
    <full-calendar #calendar [options]="calendarOptions">
      <ng-template #resourceLabelContent let-arg>
        <b>{{ arg.resource.title }}</b>
      </ng-template>
    </full-calendar>
  `,
  standalone: true,
  imports: [FullCalendarComponent]
})
class ResourceTimeGridComponent {
  calendarOptions: CalendarOptions = {
    plugins: [resourceTimeGridPlugin],
    initialView: 'resourceTimeGridDay',
    resources: [{ id: 'a', title: 'a' }]
  };
}

describe('with resource-timeline view', () => {
  let component: ResourceTimeGridComponent;
  let fixture: ComponentFixture<ResourceTimeGridComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceTimeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // necessary for initializing change detection system
  });

  it('renders custom label', () => {
    const resourceColHeader = fixture.nativeElement.querySelector('.fc-col-header-cell.fc-resource');
    expect(resourceColHeader.querySelectorAll('b').length).toBe(1);
  })
})


// Supplying content-injection as a function for dayCellContent
// https://github.com/fullcalendar/fullcalendar/issues/7187


@Component({
  template: `
    <full-calendar #calendar [options]="calendarOptions"></full-calendar>
  `,
  standalone: true,
  imports: [FullCalendarComponent]
})
class MonthComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    dayCellContent(arg) {
      return { html: `<b>${arg.dayNumberText}</b>` }
    },
  };
}

describe('with month view and dayCellContent as a function', () => {
  let component: MonthComponent;
  let fixture: ComponentFixture<MonthComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // necessary for initializing change detection system
  });

  it('should render custom content', () => {
    const resourceColHeader = fixture.nativeElement.querySelector('.fc-daygrid-day-top');
    expect(resourceColHeader.querySelectorAll('b').length).toBe(1);
  });
});


// https://github.com/fullcalendar/fullcalendar/issues/7191
describe('dayGridMonth view dot-event elements, custom content, and eventDidMount', () => {
  let eventDidMountCnt: number | undefined
  let dotEventEl: HTMLElement | undefined

  @Component({
    template: `
      <full-calendar #calendar [options]="calendarOptions">
        <ng-template #eventContent let-arg>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </ng-template>
      </full-calendar>
    `,
    standalone: true,
    imports: [FullCalendarComponent]
  })
  class MonthComponent2 {
    calendarOptions: CalendarOptions = {
      plugins: [dayGridPlugin],
      initialDate: '2023-03-20',
      events: [
        { start: '2023-03-20T00:12:00', allDay: false }
      ],
      initialView: 'dayGridMonth',
      eventDidMount(arg) {
        dotEventEl = arg.el
        eventDidMountCnt!++
      },
    };
  }

  let component: MonthComponent2;
  let fixture: ComponentFixture<MonthComponent2>;

  beforeEach(() => {
    eventDidMountCnt = 0
    dotEventEl = undefined
    fixture = TestBed.createComponent(MonthComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges(); // necessary for initializing change detection system
  });

  it('has elements visible in DOM', (done) => {
    setTimeout(() => {
      expect(eventDidMountCnt).toBe(1)
      expect(dotEventEl).toBeTruthy()
      expect(dotEventEl!.offsetWidth).toBeGreaterThan(0)
      expect(dotEventEl!.offsetHeight).toBeGreaterThan(0)
      done()
    }, 100)
  });
});


;['auto', 'background'].forEach((eventDisplay) => {
  describe(`during ${eventDisplay} custom event rendering`, async () => {
    let eventDidMountCalled: boolean | undefined;
    let component: MonthComponent3;
    let fixture: ComponentFixture<MonthComponent3>;

    @Component({
      template: `
        <full-calendar #calendar [options]="calendarOptions">
          <ng-template #eventContent let-arg>
            <i>{{ arg.event.title }}</i>
          </ng-template>
        </full-calendar>
      `,
      standalone: true,
      imports: [FullCalendarComponent]
    })
    class MonthComponent3 {
      calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin],
        initialDate: '2023-03-20',
        events: [
          {
            start: '2023-03-20',
            display: eventDisplay,
          }
        ],
        initialView: 'dayGridMonth',
        eventDidMount(eventInfo) {
          expect(eventInfo.el).toBeTruthy()
          eventDidMountCalled = true
        },
      };
    }

    beforeEach(() => {
      eventDidMountCalled = false
      fixture = TestBed.createComponent(MonthComponent3);
      component = fixture.componentInstance;
      fixture.detectChanges(); // necessary for initializing change detection system
    });

    it('receives el', (done) => {
      setTimeout(() => {
        expect(eventDidMountCalled).toBe(true)
        done()
      }, 100)
    })
  })
})


// FullCalendar data utils

function buildEvent() {
  return  {
    title: 'event',
    start: new Date(),
    end: new Date(Date.now() + 1) // guarantee only within single day
   };
}


// DOM utils

function isHeaderToolbarRendered(fixture: ComponentFixture<any>) {
  return Boolean(getHeaderToolbarEl(fixture));
}

function getHeaderToolbarEl(fixture: ComponentFixture<any>) {
  return fixture.nativeElement.querySelector('.fc-header-toolbar');
}

function isWeekendsRendered(fixture: ComponentFixture<any>) {
  return Boolean(fixture.nativeElement.querySelector('.fc-day-sat'));
}

function getFirstEventEl(fixture: ComponentFixture<any>) {
  return fixture.nativeElement.querySelector('.fc-event');
}

function getFirstEventTitle(fixture: ComponentFixture<any>) {
  return fixture.nativeElement.querySelector('.fc-event-title').innerText;
}
