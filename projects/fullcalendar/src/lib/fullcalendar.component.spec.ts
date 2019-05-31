import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FullCalendarComponent } from './fullcalendar.component';
import dayGridPlugin from '@fullcalendar/daygrid';


describe('FullCalendarComponent', () => {
  let component: FullCalendarComponent;
  let fixture: ComponentFixture<FullCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullCalendarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FullCalendarComponent);
    component = fixture.componentInstance;
    component.plugins = [dayGridPlugin];
    fixture.detectChanges(); // necessary for initializing change detection system
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(isToolbarRendered(fixture)).toBe(true);
  });

  it('should unmount and call destroy', () => {
    fixture.destroy();
    expect(isToolbarRendered(fixture)).toBe(false);
  });

  it('should expose an API', () => {
    const calendarApi = component.getApi();
    expect(calendarApi).toBeTruthy();

    const newDate = new Date(Date.UTC(2000, 0, 1));
    calendarApi.gotoDate(newDate);
    expect(calendarApi.getDate().valueOf()).toBe(newDate.valueOf());
  });

});


// Test a wrapper component

@Component({
  selector: `full-calendar-test`,
  template: `
    <full-calendar
      [plugins]="plugins"
      [header]="header"
      [weekends]="weekendsEnabled"
      (viewSkeletonRender)="handleViewSkeletonRender($event)"
    ></full-calendar>
  `
})
class HostComponent {
  plugins = [dayGridPlugin];
  header: {
    left: 'prev,next today myCustomButton',
    center: 'title',
    right: 'dayGridMonth'
  };
  weekendsEnabled = true;
  viewSkeletonRendered = false;
  disableWeekends() {
    this.weekendsEnabled = false;
  }
  handleViewSkeletonRender(event) {
    this.viewSkeletonRendered = true;
  }
}

describe('HostComponent', () => {
  let hostComponent: HostComponent;
  let hostFixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullCalendarComponent, HostComponent]
    }).compileComponents();

    hostFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges(); // necessary for initializing change detection system
  }));

  it('should handle prop changes', () => {
    expect(isWeekendsRendered(hostFixture)).toBe(true);
    hostComponent.disableWeekends();
    hostFixture.detectChanges();
    expect(isWeekendsRendered(hostFixture)).toBe(false);
  });

  it('should emit an event', () => {
    expect(hostComponent.viewSkeletonRendered).toBe(true);
  });

});


// DOM utils

function isToolbarRendered(fixture) {
  return Boolean(fixture.nativeElement.querySelector('.fc-toolbar'))
}

function isWeekendsRendered(fixture) {
  return Boolean(fixture.nativeElement.querySelector('.fc-sat'))
}
