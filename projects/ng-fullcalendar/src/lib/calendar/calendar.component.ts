import {
  Component,
  OnInit,
  ElementRef,
  Input,
  AfterViewInit,
  EventEmitter,
  Output
} from '@angular/core';
import { Calendar, OptionsInput } from '@fullcalendar/core';

@Component({
  selector: 'ng-fullcalendar',
  template: ``
})
export class CalendarComponent implements OnInit, AfterViewInit {
  // Options object, see fullcalendar docs
  @Input() options: OptionsInput;
  @Output() initialized = new EventEmitter<any>();

  @Output() eventClick = new EventEmitter<any>();
  @Output() eventMouseEnter = new EventEmitter<any>();
  @Output() eventMouseLeave = new EventEmitter<any>();
  @Output() eventDragStart = new EventEmitter<any>();
  @Output() eventDragStop = new EventEmitter<any>();
  @Output() eventDrop = new EventEmitter<any>();
  @Output() eventResizeStart = new EventEmitter<any>();
  @Output() eventResizeStop = new EventEmitter<any>();
  @Output() eventLeave = new EventEmitter<any>();
  @Output() eventResize = new EventEmitter<any>();
  @Output() eventResizableFromStart = new EventEmitter<any>();
  @Output() allDayMaintainDuration = new EventEmitter<any>();
  @Output() dragScroll = new EventEmitter<any>();
  @Output() eventConstraint = new EventEmitter<any>();
  @Output() eventReceive = new EventEmitter<any>();
  @Output() drop = new EventEmitter<any>();
  @Output() select = new EventEmitter<any>();
  @Output() dateClick = new EventEmitter<any>();
  @Output() clickButton = new EventEmitter<any>();

  private fullcalendarEvents = [
    'eventClick',
    'eventMouseEnter',
    'eventMouseLeave',
    'eventDragStart',
    'eventDragStop',
    'eventDrop',
    'eventResizeStart',
    'eventResizeStop',
    'eventLeave',
    'eventResize',
    'eventResizableFromStart',
    'allDayMaintainDuration',
    'dragScroll',
    'eventReceive',
    'drop',
    'select',
    'dateClick'
  ];
  calendar: Calendar;
  private _eventsModel: any[];
  private _reRender = true;
  @Input('eventsModel')
  set eventsModel(value: any[]) {
    this._eventsModel = value;
    if (this._reRender) {
      setTimeout(() => {
        this.renderEvents(value);
      }, 50);
    } else {
      this._reRender = true;
    }
  }

  constructor(private element: ElementRef) {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.updateOptions();
    this.calendar = new Calendar(this.element.nativeElement, this.options);
    this.calendar.render();
    this.initialized.emit();
    this.listenButtons();
  }

  private listenButtons() {
    this.element.nativeElement.addEventListener('click', ev => {
      const closest = ev.target.closest('button');
      if (closest) {
        const classnames = ev.srcElement.className.split(' ');
        classnames.forEach(name => {
          if (name.indexOf('button') === name.length - 6) {
            name = name.replace(/fc|button|-/g, '');
            if (name != '') {
              this.buttonEventDispatch(name);
            }
          } else if (name.indexOf('chevron')) {
            name = name.replace(/fc|icon|chevron|-/g, '');
            switch (name) {
              case 'right':
                this.buttonEventDispatch('next');
                break;
              case 'left':
                this.buttonEventDispatch('prev');
                break;
              default:
                break;
            }
          }
        });
      }
    });
  }
  private buttonEventDispatch(buttonType: string) {
    const currentDetail: any = {
      buttonType: buttonType,
      data: this.calendar.getDate()
    };
    this.clickButton.emit(currentDetail);
  }

  private updateOptions() {
    this.fullcalendarEvents.forEach(element => {
      if (!this.options[element]) {
        this.options[element] = info => {
          this[element].emit(info);
        };
      }
    });
  }
  private renderEvents(events: any[]) {
    // https://fullcalendar.io/docs/Calendar-batchRendering
    if (events && events.length) {
      this.calendar.batchRendering(() => {
        this.calendar.removeAllEvents();
        events.forEach(ev => {
          this.calendar.addEvent(ev);
        });
      });
      this.calendar.rerenderEvents();
    }
  }
}
