import {
  Component,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  AfterViewInit,
  OnChanges,
  OnDestroy
} from '@angular/core';
import { Calendar, BusinessHoursInput, ConstraintInput, EventApi, PluginDef } from '@fullcalendar/core';
import {
  ToolbarInput,
  CustomButtonInput,
  ButtonIconsInput, CellInfo,
  ButtonTextCompoundInput,
  ViewOptionsInput
} from '@fullcalendar/core/types/input-types';
import { DateInput } from '@fullcalendar/core/datelib/env';
import { DurationInput } from '@fullcalendar/core/datelib/duration';
import { FormatterInput } from '@fullcalendar/core/datelib/formatting';
import { DateRangeInput } from '@fullcalendar/core/datelib/date-range';
import { RawLocale, LocaleSingularArg } from '@fullcalendar/core/datelib/locale';
import { OverlapFunc, AllowFunc } from '@fullcalendar/core/validation';
import { EventSourceInput, EventInputTransformer } from '@fullcalendar/core/structs/event-source';
import { INPUT_NAMES, EVENT_NAMES } from './fullcalendar-options';

@Component({
  selector: 'full-calendar',
  template: ''
})
export class FullCalendarComponent implements AfterViewInit, OnChanges, OnDestroy {

  private calendar: Calendar;

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.calendar = new Calendar(this.element.nativeElement, this.buildOptions());
    this.calendar.render();
  }

  buildOptions() {
    const options = {};

    EVENT_NAMES.forEach(eventName => {
      options[eventName] = (...args) => {
        this[eventName].emit(...args);
      };
    });

    INPUT_NAMES.forEach(inputName => {
      if (this[inputName] !== undefined) { // unfortunately FC chokes when some props are set to undefined
        options[inputName] = this[inputName];
      }
    });

    return options;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.calendar) { // not the initial render
      const updatedInputs = {};

      for (const inputName in changes) {
        if (changes.hasOwnProperty(inputName)) {
          updatedInputs[inputName] = changes[inputName].currentValue;
        }
      }

      this.calendar.setOptions(updatedInputs);
    }
  }

  ngOnDestroy() {
    this.calendar.destroy();
    this.calendar = null;
  }

  public getApi(): Calendar {
    return this.calendar;
  }


  /*
  TODO: the following Inputs/Outputs should be automatically rewritten for each version bump
  of the core project. A script will be written to overwrite the actualy source code here.
  It is usually good to put a class's property declarations BEFORE the methods, but in this case,
  since the properties will be programmatically generated, better to put them after.
  */

  @Input() header?: boolean | ToolbarInput;
  @Input() footer?: boolean | ToolbarInput;
  @Input() customButtons?: { [name: string]: CustomButtonInput };
  @Input() buttonIcons?: boolean | ButtonIconsInput;
  @Input() themeSystem?: 'standard' | string;
  @Input() bootstrapFontAwesome?: boolean | ButtonIconsInput;
  @Input() firstDay?: number;
  @Input() dir?: 'ltr' | 'rtl' | 'auto';
  @Input() weekends?: boolean;
  @Input() hiddenDays?: number[];
  @Input() fixedWeekCount?: boolean;
  @Input() weekNumbers?: boolean;
  @Input() weekNumbersWithinDays?: boolean;
  @Input() weekNumberCalculation?: 'local' | 'ISO' | ((m: Date) => number);
  @Input() businessHours?: BusinessHoursInput;
  @Input() showNonCurrentDates?: boolean;
  @Input() height?: number | 'auto' | 'parent' | (() => number);
  @Input() contentHeight?: number | 'auto' | (() => number);
  @Input() aspectRatio?: number;
  @Input() handleWindowResize?: boolean;
  @Input() windowResizeDelay?: number;
  @Input() eventLimit?: boolean | number;
  @Input() eventLimitClick?: 'popover' | 'week' | 'day' | string | ((cellinfo: CellInfo, jsevent: Event) => void);
  @Input() timeZone?: string | boolean;
  @Input() now?: DateInput | (() => DateInput);
  @Input() defaultView?: string;
  @Input() allDaySlot?: boolean;
  @Input() allDayText?: string;
  @Input() slotDuration?: DurationInput;
  @Input() slotLabelFormat?: FormatterInput;
  @Input() slotLabelInterval?: DurationInput;
  @Input() snapDuration?: DurationInput;
  @Input() scrollTime?: DurationInput;
  @Input() minTime?: DurationInput;
  @Input() maxTime?: DurationInput;
  @Input() slotEventOverlap?: boolean;
  @Input() listDayFormat?: FormatterInput | boolean;
  @Input() listDayAltFormat?: FormatterInput | boolean;
  @Input() noEventsMessage?: string;
  @Input() defaultDate?: DateInput;
  @Input() nowIndicator?: boolean;
  @Input() visibleRange?: ((currentDate: Date) => DateRangeInput) | DateRangeInput;
  @Input() validRange?: DateRangeInput;
  @Input() dateIncrement?: DurationInput;
  @Input() dateAlignment?: string;
  @Input() duration?: DurationInput;
  @Input() dayCount?: number;
  @Input() locales?: RawLocale[];
  @Input() locale?: LocaleSingularArg;
  @Input() eventTimeFormat?: FormatterInput;
  @Input() columnHeader?: boolean;
  @Input() columnHeaderFormat?: FormatterInput;
  @Input() columnHeaderText?: string | ((date: DateInput) => string);
  @Input() columnHeaderHtml?: string | ((date: DateInput) => string);
  @Input() titleFormat?: FormatterInput;
  @Input() weekLabel?: string;
  @Input() displayEventTime?: boolean;
  @Input() displayEventEnd?: boolean;
  @Input() eventLimitText?: string | ((eventCnt: number) => string);
  @Input() dayPopoverFormat?: FormatterInput;
  @Input() navLinks?: boolean;
  @Input() navLinkDayClick?: string | ((date: Date, jsEvent: Event) => void);
  @Input() navLinkWeekClick?: string | ((weekStart: any, jsEvent: Event) => void);
  @Input() selectable?: boolean;
  @Input() selectMirror?: boolean;
  @Input() unselectAuto?: boolean;
  @Input() unselectCancel?: string;
  @Input() defaultAllDayEventDuration?: DurationInput;
  @Input() defaultTimedEventDuration?: DurationInput;
  @Input() cmdFormatter?: string;
  @Input() defaultRangeSeparator?: string;
  @Input() selectConstraint?: ConstraintInput;
  @Input() selectOverlap?: boolean | OverlapFunc;
  @Input() selectAllow?: AllowFunc;
  @Input() editable?: boolean;
  @Input() eventStartEditable?: boolean;
  @Input() eventDurationEditable?: boolean;
  @Input() eventConstraint?: ConstraintInput;
  @Input() eventOverlap?: boolean | OverlapFunc;
  @Input() eventAllow?: AllowFunc;
  @Input() eventClassName?: string[] | string;
  @Input() eventClassNames?: string[] | string;
  @Input() eventBackgroundColor?: string;
  @Input() eventBorderColor?: string;
  @Input() eventTextColor?: string;
  @Input() eventColor?: string;
  @Input() events?: EventSourceInput;
  @Input() eventSources?: EventSourceInput[];
  @Input() allDayDefault?: boolean;
  @Input() startParam?: string;
  @Input() endParam?: string;
  @Input() lazyFetching?: boolean;
  @Input() nextDayThreshold?: DurationInput;
  @Input() eventOrder?: string | Array<((a: EventApi, b: EventApi) => number) | (string | ((a: EventApi, b: EventApi) => number))>;
  @Input() rerenderDelay?: number | null;
  @Input() dragRevertDuration?: number;
  @Input() dragScroll?: boolean;
  @Input() longPressDelay?: number;
  @Input() eventLongPressDelay?: number;
  @Input() droppable?: boolean;
  @Input() dropAccept?: string | ((draggable: any) => boolean);
  @Input() eventDataTransform?: EventInputTransformer;
  @Input() allDayMaintainDuration?: Boolean;
  @Input() eventResizableFromStart?: Boolean;
  @Input() timeGridEventMinHeight?: number;
  @Input() allDayHtml?: string
  @Input() eventDragMinDistance?: number
  @Input() eventSourceFailure?: any
  @Input() eventSourceSuccess?: any
  @Input() forceEventDuration?: boolean
  @Input() progressiveEventRendering?: boolean
  @Input() selectLongPressDelay?: number
  @Input() selectMinDistance?: number
  @Input() timeZoneParam?: string
  @Input() titleRangeSeparator?: string
  // compound OptionsInput...
  @Input() buttonText?: ButtonTextCompoundInput;
  @Input() views?: { [viewId: string]: ViewOptionsInput };
  @Input() plugins?: (PluginDef | string)[];
  // scheduler...
  @Input() schedulerLicenseKey?: string;
  @Input() resources?: any;
  @Input() resourceLabelText?: string;
  @Input() resourceOrder?: any;
  @Input() filterResourcesWithEvents?: any;
  @Input() resourceText?: any;
  @Input() resourceGroupField?: any;
  @Input() resourceGroupText?: any;
  @Input() resourceAreaWidth?: any;
  @Input() resourceColumns?: any;
  @Input() resourcesInitiallyExpanded?: any;
  @Input() slotWidth?: any;
  @Input() datesAboveResources?: any;
  @Input() googleCalendarApiKey?: string;
  @Input() refetchResourcesOnNavigate?: boolean
  @Input() eventResourceEditable?: boolean

  @Output() datesRender = new EventEmitter<any>();
  @Output() datesDestroy = new EventEmitter<any>();
  @Output() dayRender = new EventEmitter<any>();
  @Output() windowResize = new EventEmitter<any>();
  @Output() dateClick = new EventEmitter<any>();
  @Output() eventClick = new EventEmitter<any>();
  @Output() eventMouseEnter = new EventEmitter<any>();
  @Output() eventMouseLeave = new EventEmitter<any>();
  @Output() select = new EventEmitter<any>();
  @Output() unselect = new EventEmitter<any>();
  @Output() loading = new EventEmitter<any>();
  @Output() eventRender = new EventEmitter<any>();
  @Output() eventPositioned = new EventEmitter<any>();
  @Output() eventDestroy = new EventEmitter<any>();
  @Output() eventDragStart = new EventEmitter<any>();
  @Output() eventDragStop = new EventEmitter<any>();
  @Output() eventDrop = new EventEmitter<any>();
  @Output() eventResizeStart = new EventEmitter<any>();
  @Output() eventResizeStop = new EventEmitter<any>();
  @Output() eventResize = new EventEmitter<any>();
  @Output() drop = new EventEmitter<any>();
  @Output() eventReceive = new EventEmitter<any>();
  @Output() eventLeave = new EventEmitter<any>();
  @Output() viewSkeletonRender = new EventEmitter<any>();
  @Output() viewSkeletonDestroy = new EventEmitter<any>();
  @Output() _destroyed = new EventEmitter<any>();
  // scheduler...
  @Output() resourceRender = new EventEmitter<any>();
}
