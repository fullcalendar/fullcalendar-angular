import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FullCalendarComponent } from './fullcalendar.component';
import dayGridPlugin from '@fullcalendar/daygrid';

// wrapper component
@Component({
  selector: `full-calendar-test`,
  template: `<full-calendar
  [plugins]="plugins"
  [header]="header"
  [weekends]="weekendsEnabled"
  (viewSkeletonRender)="handleViewSkeletonRender($event)"
  ></full-calendar>`
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

describe('FullCalendarComponent', () => {
  let component: FullCalendarComponent;
  let fixture: ComponentFixture<FullCalendarComponent>;

  let hostComponent: HostComponent;
  let hostFixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullCalendarComponent, HostComponent]
    })
      .compileComponents();
  }));

  // for test private methods
  beforeEach(() => {
    fixture = TestBed.createComponent(FullCalendarComponent);
    component = fixture.componentInstance;
    component.plugins = [dayGridPlugin];
    fixture.detectChanges();
  });

  // for test host
  beforeEach(() => {
    hostFixture = TestBed.createComponent(HostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.fc-toolbar')).toBeTruthy();
  });

  it('should unmount and call destroy', () => {
    fixture.destroy();
    expect(fixture.nativeElement.querySelector('.fc-toolbar')).toBeFalsy();
  });

  it('should handle prop changes', () => {
    expect(hostFixture.nativeElement.querySelector('.fc-sat')).toBeTruthy();
    hostComponent.disableWeekends();
    hostFixture.detectChanges();
    expect(hostFixture.nativeElement.querySelector('.fc-sat')).toBeFalsy();
  });

  it('should emit an event', () => {
    expect(hostComponent.viewSkeletonRendered).toBe(true);
  });

  it('should expose an API', () => {
    const calendarApi = component.getApi();
    expect(calendarApi).toBeTruthy();

    const newDate = new Date(Date.UTC(2000, 0, 1));
    calendarApi.gotoDate(newDate);
    expect(calendarApi.getDate().valueOf()).toBe(newDate.valueOf());
  });

});
