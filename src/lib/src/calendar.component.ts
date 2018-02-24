import { Component, Input, Output, OnInit, NgZone, AfterViewInit, HostListener, AfterContentChecked, AfterViewChecked, ElementRef, EventEmitter } from '@angular/core';
import $ from 'jquery';
import 'fullcalendar';
import { Options } from 'fullcalendar';
import './lib/customEvent';
import { ButtonClickModel } from './models/buttonClickModel';
import { UpdateEventModel } from './models/updateEventModel';
import { RenderEventModel } from './models/renderEventModel';
@Component({
    selector: 'ng-fullcalendar',
    template: '<div id="calendar"></div>',
})
export class CalendarComponent implements OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
    @Input() options: Options;
    @Output() eventDrop = new EventEmitter<any>();
    @Output() eventResize = new EventEmitter<any>();
    @Output() eventClick = new EventEmitter<any>();
    @Output() clickButton = new EventEmitter<any>();
    @Output() windowResize = new EventEmitter<any>();
    @Output() viewRender = new EventEmitter<any>();
    @Output() viewDestroy = new EventEmitter<any>();
    @Output() eventRender = new EventEmitter<any>();
    @Output() initialized = new EventEmitter<any>();
    @Output() select = new EventEmitter<any>();
    @Output() unselect = new EventEmitter<any>();
    @Output() dayClick = new EventEmitter<any>();
    @Output() navLinkDayClick = new EventEmitter<any>();
    @Output() navLinkWeekClick = new EventEmitter<any>();
    @Output() eventMouseover = new EventEmitter<any>();
    @Output() eventMouseout = new EventEmitter<any>();


    constructor(private element: ElementRef, private zone: NgZone) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.updaterOptions();
            this.zone.runOutsideAngular(() => {
                $('ng-fullcalendar').fullCalendar(this.options);
                this.initialized.emit(true);
                // Click listeners
                let elem = document.getElementsByTagName('ng-fullcalendar');

                $('[class ^="fc"][class *="button"]').click(el => {
                    let classnames = el.currentTarget.className.split(' ');
                    classnames.forEach(name => {
                        if (name.indexOf('button') == name.length - 6) {
                            name = name.replace(/fc|button|-/g, '');
                            if (name != '') {
                                eventDispatch(name);
                            }
                        }
                    });
                });
                function eventDispatch(buttonType: string) {
                    let data = $('ng-fullcalendar').fullCalendar('getDate');
                    let currentDetail: ButtonClickModel = {
                        buttonType: buttonType,
                        data: data
                    };
                    var widgetEvent = new CustomEvent('clickButton', {
                        bubbles: true,
                        detail: currentDetail
                    });
                    elem[0].dispatchEvent(widgetEvent);
                }
            });
        }, 100);

    }
    ngAfterContentChecked() {
    }
    ngAfterViewChecked() {
    }
    updaterOptions() {
        let elem = document.getElementsByTagName('ng-fullcalendar');
        this.options.eventDrop = function (event, duration) {
            let detail: UpdateEventModel = { event: event, duration: duration };
            var widgetEvent = new CustomEvent('eventDrop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventResize = function (event, duration) {
            let detail: UpdateEventModel = { event: event, duration: duration };
            var widgetEvent = new CustomEvent('eventResize', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventRender = function (event, element) {
            let detail: RenderEventModel = { event: event, element: element };
            var widgetEvent = new CustomEvent('eventRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventClick = function (event) {
            let detail: UpdateEventModel = { event: event, duration: null };
            var widgetEvent = new CustomEvent('eventClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.windowResize = function (view) {
            let detail = { view: view };
            var widgetEvent = new CustomEvent('windowResize', {
                bubbles: true,
                detail: detail
            });
            if (elem && elem[0]) {
                elem[0].dispatchEvent(widgetEvent);
            }
        };
        this.options.viewRender = function (view, element) {
            let detail = { view: view, element: element };
            var widgetEvent = new CustomEvent('viewRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.viewDestroy = function (view, element) {
            let detail = { view: view, element: element };
            var widgetEvent = new CustomEvent('viewDestroy', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.select = function (start: any, end: any, jsEvent: MouseEvent, view: any, resource?: any) {
            let detail = { start: start, end: end, jsEvent: jsEvent, view: view, resource: resource };
            var widgetEvent = new CustomEvent('select', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.unselect = function (view: any, jsEvent: Event) {
            let detail = { view: view, jsEvent: jsEvent };
            var widgetEvent = new CustomEvent('unselect', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.dayClick = function (date: any, jsEvent: Event, view: any) {
            let detail = { date: date, jsEvent: jsEvent, view: view };
            var widgetEvent = new CustomEvent('unselect', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.navLinkDayClick = function (date: any, jsEvent: Event) {
            let detail = { date: date, jsEvent: jsEvent };
            var widgetEvent = new CustomEvent('unselect', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.navLinkWeekClick = function (weekStart: any, jsEvent: Event) {
            let detail = { weekStart: weekStart, jsEvent: jsEvent };
            var widgetEvent = new CustomEvent('unselect', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
    }

    fullCalendar(...args: any[]) {
        if (!args) {
            return;
        }
        switch (args.length) {
            case 0:
                return;
            case 1:
                return $(this.element.nativeElement).fullCalendar(args[0]);
            case 2:
                return $(this.element.nativeElement).fullCalendar(args[0], args[1]);
            case 3:
                return $(this.element.nativeElement).fullCalendar(args[0], args[1], args[2]);
        }
    }

    updateEvent(event: any) {
        return $(this.element.nativeElement).fullCalendar('updateEvent', event);
    }

    clientEvents(idOrFilter: any): any {
        return $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
    }
}
