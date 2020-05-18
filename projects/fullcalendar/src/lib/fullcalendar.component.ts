import deepEqual from 'fast-deep-equal';
import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  DoCheck,
  AfterContentChecked,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import { deepCopy, shallowCopy, mapHash } from './utils';
import { OPTION_IS_DEEP } from './fullcalendar-options';

@Component({
  selector: 'full-calendar',
  template: '',
  styleUrls: ['./fullcalendar.component.scss'],
  encapsulation: ViewEncapsulation.None // the styles are root-level, not scoped within the component
})
export class FullCalendarComponent implements AfterViewInit, DoCheck, AfterContentChecked, OnDestroy {

  @Input() options?: CalendarOptions;
  @Input() deepChangeDetection?: boolean;

  private calendar: Calendar;
  private optionSnapshot: object = {}; // for diffing only

  constructor(private element: ElementRef) {
  }

  ngAfterViewInit() {
    const { deepChangeDetection } = this;
    const options = this.options || {};

    // initialize snapshot
    this.optionSnapshot = mapHash(options, (optionVal, optionName) => (
      (deepChangeDetection && OPTION_IS_DEEP[optionName])
        ? deepCopy(optionVal)
        : optionVal
    ));

    this.calendar = new Calendar(this.element.nativeElement, options);
    this.calendar.render();
  }

  /*
  allows us to manually detect complex input changes, internal mutations to certain options.
  called before ngOnChanges. called much more often than ngOnChanges.
  */
  ngDoCheck() {
    if (this.calendar) { // not the initial render
      const { deepChangeDetection, optionSnapshot } = this;
      const newOptions = this.options || {};
      const newProcessedOptions = {};
      let anyChanges = false;

      // detect adds and updates (and update snapshot)
      for (const optionName in newOptions) {
        if (newOptions.hasOwnProperty(optionName)) {
          let optionVal = newOptions[optionName];

          if (deepChangeDetection && OPTION_IS_DEEP[optionName]) {
            if (!deepEqual(optionSnapshot[optionName], optionVal)) {
              optionSnapshot[optionName] = deepCopy(optionVal);
              anyChanges = true;

              // trick FC into knowing about a nested change.
              // TODO: future versions won't need this.
              // can't use the previously-made deep copy because it blows away prototype-association.
              optionVal = shallowCopy(optionVal);
            }

          } else {
            if (optionSnapshot[optionName] !== optionVal) {
              optionSnapshot[optionName] = optionVal;
              anyChanges = true;
            }
          }

          newProcessedOptions[optionName] = optionVal;
        }
      }

      const oldOptionNames = Object.keys(optionSnapshot);

      // detect removals (and update snapshot)
      for (const optionName of oldOptionNames) {
        if (!(optionName in newOptions)) { // doesn't exist in new options?
          delete optionSnapshot[optionName];
          anyChanges = true;
        }
      }

      if (anyChanges) {
        this.calendar.pauseRendering();
        this.calendar.resetOptions(newProcessedOptions);
      }
    }
  }

  ngAfterContentChecked() {
    if (this.calendar) { // too defensive?
      this.calendar.resumeRendering();
    }
  }

  ngOnDestroy() {
    if (this.calendar) { // too defensive?
      this.calendar.destroy();
      this.calendar = null;
    }
  }

  public getApi(): Calendar {
    return this.calendar;
  }

}
