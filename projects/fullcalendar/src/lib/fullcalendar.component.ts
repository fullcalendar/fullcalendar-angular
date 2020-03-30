import deepEqual from 'fast-deep-equal';
import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  DoCheck,
  AfterContentChecked,
  OnDestroy
} from '@angular/core';
import { Calendar, OptionsInput } from '@fullcalendar/core';
import { deepCopy, shallowCopy } from './utils';
import { OPTION_IS_DEEP } from './fullcalendar-options';

@Component({
  selector: 'full-calendar',
  template: ''
})
export class FullCalendarComponent implements AfterViewInit, DoCheck, AfterContentChecked, OnDestroy {

  @Input() options?: OptionsInput;
  @Input() deepChangeDetection?: boolean;

  private calendar: Calendar;
  private frozenOptions: object = {}; // for diffing only
  private optionUpdates: object = {};
  private optionDeletes: string[] = [];

  constructor(private element: ElementRef) {
  }

  ngAfterViewInit() {
    const options = this.options || {};
    this.frozenOptions = this.deepChangeDetection ? deepCopy(options) : { ...options };
    this.calendar = new Calendar(this.element.nativeElement, options);
    this.calendar.render();
  }

  /*
  allows us to manually detect complex input changes, internal mutations to certain options.
  called before ngOnChanges. called much more often than ngOnChanges.
  */
  ngDoCheck() {
    if (this.calendar) { // not the initial render
      const { deepChangeDetection, frozenOptions, optionUpdates, optionDeletes } = this;
      const options = this.options || {};

      for (const optionName in options) {
        if (options.hasOwnProperty(optionName)) {
          const optionVal = options[optionName];

          if (deepChangeDetection && OPTION_IS_DEEP[optionName]) {
            if (!deepEqual(optionVal, frozenOptions[optionName])) {
              frozenOptions[optionName] = deepCopy(optionVal);

              // the only reason we shallow-copy is to trick FC into knowing there's a change when nested values change but the reference doesn't.
              // TODO: future versions of FC will more gracefully handle event option-changes that are same-reference.
              optionUpdates[optionName] = shallowCopy(optionVal);
            }

          } else {
            if (optionVal !== frozenOptions[optionName]) {
              frozenOptions[optionName] = optionVal;
              optionUpdates[optionName] = optionVal;
            }
          }
        }
      }

      const frozenOptionNames = Object.keys(frozenOptions);

      for (const optionName of frozenOptionNames) {
        if (!(optionName in options)) {
          delete frozenOptions[optionName];
          optionDeletes.push(optionName);
        }
      }
    }
  }

  ngAfterContentChecked() {
    const { optionUpdates, optionDeletes } = this; // hold on to reference before clearing

    if (
      Object.keys(optionUpdates).length > 0 ||
      optionDeletes.length
    ) {
      // clear first, in case the rerender causes new dirtiness
      this.optionUpdates = {};
      this.optionDeletes = [];

      this.calendar.mutateOptions(optionUpdates, optionDeletes);
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
