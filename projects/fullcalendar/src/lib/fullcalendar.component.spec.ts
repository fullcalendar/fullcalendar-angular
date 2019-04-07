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
  [weekends]="weekends"
  (viewSkeletonRender)="viewSkeletonRenderEvent($event)"
  ></full-calendar>`
})
class TestHostComponent {
  plugins = [dayGridPlugin];
  header: {
    left: 'prev,next today myCustomButton',
    center: 'title',
    right: 'dayGridMonth'
  };
  weekends = true;
  viewSkeletonRender = false;
  updateWeekendsView() {
    this.weekends = false;
  }
  viewSkeletonRenderEvent(event) {
    this.viewSkeletonRender = true;
  }
}

describe('FullCalendarComponent', () => {
  let component: FullCalendarComponent;
  let fixture: ComponentFixture<FullCalendarComponent>;

  let testComponent: TestHostComponent;
  let testFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullCalendarComponent, TestHostComponent]
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
    testFixture = TestBed.createComponent(TestHostComponent);
    testComponent = testFixture.componentInstance;
    testFixture.detectChanges();
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
    expect(testFixture.nativeElement.querySelector('.fc-sat')).toBeTruthy();
    testComponent.updateWeekendsView();
    testFixture.detectChanges();
    expect(testFixture.nativeElement.querySelector('.fc-sat')).toBeFalsy();
  });
  it('should emit an event', () => {
    expect(testComponent.viewSkeletonRender).toBe(true);
  });
  it('should expose an API', () => {
    const calendarApi = component.getApi();
    expect(calendarApi).toBeTruthy();

    const newDate = new Date(Date.UTC(2000, 0, 1));
    calendarApi.gotoDate(newDate);
    expect(calendarApi.getDate().valueOf()).toBe(newDate.valueOf());
  });
});
