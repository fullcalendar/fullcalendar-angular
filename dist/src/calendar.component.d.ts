import { OnInit, NgZone, AfterViewInit, AfterContentChecked, AfterViewChecked, ElementRef, EventEmitter } from '@angular/core';
import 'fullcalendar';
import { Options } from 'fullcalendar';
import './lib/customEvent';
export declare class CalendarComponent implements OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
    private element;
    private zone;
    options: Options;
    eventDrop: EventEmitter<any>;
    eventResize: EventEmitter<any>;
    eventClick: EventEmitter<any>;
    clickButton: EventEmitter<any>;
    windowResize: EventEmitter<any>;
    viewRender: EventEmitter<any>;
    viewDestroy: EventEmitter<any>;
    eventRender: EventEmitter<any>;
    initialized: EventEmitter<any>;
    select: EventEmitter<any>;
    unselect: EventEmitter<any>;
    constructor(element: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
    updaterOptions(): void;
    fullCalendar(...args: any[]): void;
    updateEvent(event: any): void;
    clientEvents(idOrFilter: any): any;
}
