import {
  Component,
  OnInit,
  ElementRef,
  Input,
  AfterViewInit,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  Calendar,
  OptionsInput,
  BusinessHoursInput,
  ConstraintInput,
  EventApi
} from '@fullcalendar/core';
import {
  ToolbarInput,
  CustomButtonInput,
  ButtonIconsInput,
  CellInfo
} from '@fullcalendar/core/types/input-types';
import { DateInput } from '@fullcalendar/core/datelib/env';
import { DurationInput } from '@fullcalendar/core/datelib/duration';
import { FormatterInput } from '@fullcalendar/core/datelib/formatting';
import { DateRangeInput } from '@fullcalendar/core/datelib/date-range';
import {
  LocalePluralArg,
  LocaleSingularArg
} from '@fullcalendar/core/datelib/locale';
import { OverlapFunc, AllowFunc } from '@fullcalendar/core/validation';
import { EventSourceInput } from '@fullcalendar/core/structs/event-source';
import { fullcalendarEvents, fullcalendarInputs } from './fullcalendar';

@Component({
  selector: 'full-calendar',
  template: ``
})
export class CalendarComponent implements OnInit, OnChanges, AfterViewInit {
  // Options object, see fullcalendar docs
  private options: OptionsInput = {};

  // Fullcalendar Inputs
  @Input() header?: boolean | ToolbarInput;
  @Input() footer?: boolean | ToolbarInput;
  @Input() customButtons?: {
    [name: string]: CustomButtonInput;
  };
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
  @Input() eventLimitClick?:
    | 'popover'
    | 'week'
    | 'day'
    | string
    | ((cellinfo: CellInfo, jsevent: Event) => void);
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
  @Input() visibleRange?:
    | ((currentDate: Date) => DateRangeInput)
    | DateRangeInput;
  @Input() validRange?: DateRangeInput;
  @Input() dateIncrement?: DurationInput;
  @Input() dateAlignment?: string;
  @Input() duration?: DurationInput;
  @Input() dayCount?: number;
  @Input() locales?: LocalePluralArg;
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
  @Input() navLinkWeekClick?:
    | string
    | ((weekStart: any, jsEvent: Event) => void);
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
  @Input() eventOrder?:
    | string
    | Array<
    | ((a: EventApi, b: EventApi) => number)
    | (string | ((a: EventApi, b: EventApi) => number))
    >;
  @Input() rerenderDelay?: number | null;
  @Input() dragRevertDuration?: number;
  @Input() dragScroll?: boolean;
  @Input() longPressDelay?: number;
  @Input() eventLongPressDelay?: number;
  @Input() droppable?: boolean;
  @Input() dropAccept?: string | ((draggable: any) => boolean);

  // Custom
  @Input() plugins?: any;

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
  @Output() eventRender = new EventEmitter<any>();
  @Output() eventPositioned = new EventEmitter<any>();
  @Output() eventDestroy = new EventEmitter<any>();
  @Output() eventDragStart = new EventEmitter<any>();
  @Output() eventDragStop = new EventEmitter<any>();
  @Output() eventDrop = new EventEmitter<any>();
  @Output() eventResizeStart = new EventEmitter<any>();
  @Output() eventResizeStop = new EventEmitter<any>();
  @Output() eventReceive = new EventEmitter<any>();
  @Output() eventResize = new EventEmitter<any>();
  @Output() eventLeave = new EventEmitter<any>();
  @Output() eventResizableFromStart = new EventEmitter<any>();
  @Output() allDayMaintainDuration = new EventEmitter<any>();
  @Output() drop = new EventEmitter<any>();

  calendar: Calendar;

  constructor(private element: ElementRef) { }
  ngOnInit() { }
  ngAfterViewInit() {
    this.updateAllOptions();
    this.calendar = new Calendar(this.element.nativeElement, this.options);
    this.calendar.render();
  }

  ngOnChanges(changes) {
    const keys = Object.keys(changes);
    if (keys) {
      this.updateInputOptions(keys);
      this.rerenderCalendar();
    }
  }

  private rerenderCalendar() {
    if (this.calendar) {
      this.calendar.destroy();
      this.calendar = new Calendar(this.element.nativeElement, this.options);
      this.calendar.render();
    }
  }
  private updateInputOptions(inputs: string[]) {
    inputs.forEach(element => {
      if (this[element]) {
        this.options[element] = this[element];
      }
    });
  }
  private updateAllOptions() {
    fullcalendarEvents.forEach(element => {
      this.options[element] = info => {
        this[element].emit(info);
      };
    });
    fullcalendarInputs.forEach(element => {
      if (this[element]) {
        this.options[element] = this[element];
      }
    });
    this.options.plugins = this.plugins;
  }
}
