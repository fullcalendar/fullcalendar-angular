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
  @Output() eventClick = new EventEmitter<any>();
  constructor(private element: ElementRef) {}
  ngOnInit() {}
  ngAfterViewInit() {
    this.updateOptions();
    const calendar = new Calendar(this.element.nativeElement, this.options);
    calendar.render();
  }

  private updateOptions() {
    this.options['eventClick'] = info => {
      this.eventClick.emit(info);
    };
  }
}
