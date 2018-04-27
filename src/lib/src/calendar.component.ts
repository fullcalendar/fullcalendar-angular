import {
    Component, Input, Output, OnInit, NgZone,
    AfterViewInit, HostListener, AfterContentChecked, AfterViewChecked,
    ElementRef, EventEmitter
} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import { Options } from 'fullcalendar';
import './lib/customEvent';
import { ButtonClickModel } from './models/buttonClickModel';
import { UpdateEventModel } from './models/updateEventModel';
import { RenderEventModel } from './models/renderEventModel';
import { ClickEventModel } from './models/clickEventModel';
import { ResizeEventModel } from './models/resizeEventModel';
@Component({
    selector: 'ng-fullcalendar',
    template: '',
})
export class CalendarComponent implements OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
    // The event array for the calendar, getter/setter
    private eventId = 0;
    private eventIds = [];
    private _eventsModel: any[] = [];
    @Input() set eventsModel(newEvents: any[]) {
        console.log('set eventsModel', newEvents);
        // Possibly setting events to null
        if (!newEvents || newEvents.length === 0) {
            if (this._eventsModel !== newEvents) {
                this.eventIds = [];
                this._eventsModel = newEvents;
            }
            return;
        }
        const currentEventIds = this.eventIds;

        // Check each event, add new ids if needed
        const existingEventIds = this.eventIds;
        const tempEventIds: any = [];
        newEvents.forEach((newEvent) => {
            if (!('$$id' in newEvent)) {
                newEvent['$$id'] = this.eventId++;
            }
            const existingIdIndex = this.eventIds.indexOf(newEvent['$$id']);
            if (existingIdIndex === -1) {
                console.log('sticking event', newEvent);
                $(this.element.nativeElement).fullCalendar('renderEvent', newEvent, true);
            } else {
                delete (existingEventIds[existingIdIndex]);
            }
            tempEventIds.push(newEvent['$$id']);
        });

        // There may be excess events
        existingEventIds.forEach((existingEventId) => {
            $(this.element.nativeElement).fullCalendar('removeEvents', function (event: any) {
                return event['$$id'] === existingEventId;
            });
        });

        // Update the data and emit the change
        this.eventIds = tempEventIds;
        this._eventsModel = newEvents;
        this.eventsModelChange.next(this._eventsModel);
    }
    get eventsModel(): any[] {
        return this._eventsModel;
    }
    // Notify when things change
    @Output() eventsModelChange = new EventEmitter<any>();

    // Options object, see fullcalendar docs
    @Input() options: Options;

    // Various events
    @Output() eventDrop = new EventEmitter<any>();
    @Output() eventResize = new EventEmitter<any>();
    @Output() eventResizeStart = new EventEmitter<any>();
    @Output() eventResizeStop = new EventEmitter<any>();
    @Output() eventClick = new EventEmitter<any>();
    @Output() clickButton = new EventEmitter<any>();
    @Output() windowResize = new EventEmitter<any>();
    @Output() viewRender = new EventEmitter<any>();
    @Output() eventAfterRender = new EventEmitter<any>();
    @Output() eventAfterAllRender = new EventEmitter<any>();
    @Output() viewDestroy = new EventEmitter<any>();
    @Output() eventRender = new EventEmitter<any>();
    @Output() eventDestroy = new EventEmitter<any>();
    @Output() eventMouseOver = new EventEmitter<any>();
    @Output() eventMouseOut = new EventEmitter<any>();
    @Output() initialized = new EventEmitter<any>();
    @Output() select = new EventEmitter<any>();
    @Output() unselect = new EventEmitter<any>();
    @Output() dayClick = new EventEmitter<any>();
    @Output() navLinkDayClick = new EventEmitter<any>();
    @Output() navLinkWeekClick = new EventEmitter<any>();
    @Output() eventDragStart = new EventEmitter<any>();
    @Output() eventDragStop = new EventEmitter<any>();
    @Output() drop = new EventEmitter<any>();
    @Output() eventReceive = new EventEmitter<any>();
    @Output() dayRender = new EventEmitter<any>();
    @Output() resourceRender = new EventEmitter<any>();

    constructor(private element: ElementRef, private zone: NgZone) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.updaterOptions();
            this.zone.runOutsideAngular(() => {

                this.options.events = this._eventsModel;
                $(this.element.nativeElement).fullCalendar(this.options);
                // this.eventsModelChange.next(this.options.events);
                this.initialized.emit(true);
                // Click listeners
                let elem = document.getElementsByTagName('ng-fullcalendar');

                // Don't know what this does
                $('[class ^="fc"][class *="button"]').click(el => {
                    let classnames = el.currentTarget.className.split(' ');
                    classnames.forEach(name => {
                        if (name.indexOf('button') === name.length - 6) {
                            name = name.replace(/fc|button|-/g, '');
                            if (name !== '') {
                                this.renderEvents(this._eventsModel);
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
                    const widgetEvent = new CustomEvent('clickButton', {
                        bubbles: true,
                        detail: currentDetail
                    });
                    elem[0].dispatchEvent(widgetEvent);
                }
            });
        }, );

    }
    ngAfterContentChecked() {
    }
    ngAfterViewChecked() {
    }
    // Replace an existing event in array with new data
    updateEventsModel(event: any) {
        console.log('updateEventsModel', event);
        const tempEvents: any[] = [];
        this.eventsModel.forEach((eventModel, index) => {
            if (eventModel['$$id'] === event['$$id']) {
                tempEvents.push(event);
            } else {
                tempEvents.push(eventModel);
            }
        });
        this.eventsModel = tempEvents;
    }
    // Add new event to array
    addEventsModel(newEvent: any) {
        console.log('addEventsModel', newEvent);
        const events = this.eventsModel;
        events.push(newEvent);
        this.eventsModel = events;
    }
    // Remove event from array
    removeEventsModel(deadEvent: any) {
        const tempEvents: any[] = [];
        this.eventsModel.forEach((eventModel, index) => {
            if (eventModel['$$id'] !== deadEvent['$$id']) {
                tempEvents.push(eventModel);
            }
        });
        this.eventsModel = tempEvents;
    }
    // All the callbacks are defined here
    updaterOptions() {
        let elem = document.getElementsByTagName('ng-fullcalendar');
        // Event is dropped
        this.options.eventDrop = (event: any, duration: any, revertFunc: any, jsEvent: any, ui: any, view: any) => {
            let detail: UpdateEventModel = {
                event: event, duration: duration, revertFunc: revertFunc, jsEvent: jsEvent, ui: ui, view: view
            };
            const widgetEvent = new CustomEvent('eventDrop', {
                bubbles: true,
                detail: detail
            });
            this.updateEventsModel(event);
            elem[0].dispatchEvent(widgetEvent);
        };
        // Event is resized
        this.options.eventResize = (event: any, duration: any, revertFunc: any, jsEvent: any, ui: any, view: any) => {
            let detail: UpdateEventModel = {
                event: event, duration: duration, revertFunc: revertFunc, jsEvent: jsEvent, ui: ui, view: view
            };
            const widgetEvent = new CustomEvent('eventResize', {
                bubbles: true,
                detail: detail
            });
            this.updateEventsModel(event);
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventResizeStart = (event: any, jsEvent: any, ui: any, view: any) => {
            let detail: ResizeEventModel = {
                event: event, jsEvent: jsEvent, ui: ui, view: view
            };
            const widgetEvent = new CustomEvent('eventResizeStart', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventResizeStop = (event: any, jsEvent: any, ui: any, view: any) => {
            let detail: ResizeEventModel = {
                event: event, jsEvent: jsEvent, ui: ui, view: view
            };
            const widgetEvent = new CustomEvent('eventResizeStop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventRender = (event: any, element: any, view: any) => {
            let detail: RenderEventModel = { event: event, element: element, view: view };
            const widgetEvent = new CustomEvent('eventRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventAfterRender = (event: any, element: any, view: any) => {
            let detail: RenderEventModel = { event: event, element: element, view: view };
            const widgetEvent = new CustomEvent('eventAfterRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventClick = (event: any, jsEvent: any, view: any) => {
            let detail: ClickEventModel = { event: event, jsEvent: jsEvent, view: view };
            console.log('eventClick detail', detail);
            const widgetEvent = new CustomEvent('eventClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);

        };
        this.options.eventDestroy = (event: any, element: any, view: any) => {
            let detail = { event: event, element: element, view: view };
            const widgetEvent = new CustomEvent('eventDestroy', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);

        };
        this.options.windowResize = function (view: any) {
            let detail = { view: view };
            const widgetEvent = new CustomEvent('windowResize', {
                bubbles: true,
                detail: detail
            });
            if (elem && elem[0]) {
                elem[0].dispatchEvent(widgetEvent);
            }
        };
        this.options.viewRender = function (view: any, element: any) {
            let detail = { view: view, element: element };
            const widgetEvent = new CustomEvent('viewRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.viewDestroy = function (view: any, element: any) {
            let detail = { view: view, element: element };
            const widgetEvent = new CustomEvent('viewDestroy', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.select = (start: any, end: any, jsEvent: Event, view: any, resource?: any) => {
            let detail = { start: start, end: end, jsEvent: jsEvent, view: view, resource: resource };
            const widgetEvent = new CustomEvent('select', {
                bubbles: true,
                detail: detail
            });
            const newEvent = {
                start: start,
                end: end
            };
            // Add the new event to the eventsModel
            this.addEventsModel(newEvent);

            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.unselect = (view: any, jsEvent: Event) => {
            let detail = { view: view, jsEvent: jsEvent };
            const widgetEvent = new CustomEvent('unselect', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.dayClick = (date: any, jsEvent: Event, view: any) => {
            let detail = { date: date, jsEvent: jsEvent, view: view };
            const widgetEvent = new CustomEvent('dayClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.navLinkDayClick = (date: any, jsEvent: Event) => {
            let detail = { date: date, jsEvent: jsEvent };
            const widgetEvent = new CustomEvent('navLinkDayClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.navLinkWeekClick = (weekStart: any, jsEvent: Event) => {
            let detail = { weekStart: weekStart, jsEvent: jsEvent };
            const widgetEvent = new CustomEvent('navLinkWeekClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventDragStart = (event: any, jsEvent: Event, ui: any, view: any) => {
            let detail = { event: event, jsEvent: jsEvent, ui: ui, view: view };
            const widgetEvent = new CustomEvent('eventDragStart', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventDragStop = (event: any, jsEvent: Event, ui: any, view: any) => {
            let detail = { event: event, jsEvent: jsEvent, ui: ui, view: view };
            const widgetEvent = new CustomEvent('eventDragStop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventMouseover = (event: any, jsEvent: Event, view: any) => {
            let detail = { event: event, jsEvent: jsEvent, view: view };
            const widgetEvent = new CustomEvent('eventMouseover', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventMouseout = (event: any, jsEvent: Event, view: any) => {
            let detail = { event: event, jsEvent: jsEvent, view: view };
            const widgetEvent = new CustomEvent('eventMouseout', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.drop = (date: any, jsEvent: Event, ui: any, resourceId?: any) => {
            let detail = { date: date, jsEvent: jsEvent, ui: ui, resourceId: resourceId };
            const widgetEvent = new CustomEvent('drop', {
                bubbles: true,
                detail: detail
            });
            // probably need to add an event - not handled!
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventReceive = (event: any) => {
            let detail = { event: event };
            const widgetEvent = new CustomEvent('eventReceive', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.dayRender = (date: any, cell: any) => {
            let detail = { date: date, cell: cell };
            const widgetEvent = new CustomEvent('dayRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.resourceRender = (resourceObj: any, labelTds: any, bodyTds: any) => {
            let detail = { resourceObj: resourceObj, labelTds: labelTds, bodyTds: bodyTds };
            const widgetEvent = new CustomEvent('resourceRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
    }

    fullCalendar(...args: any[]): any {
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
    renderEvents(events: any[]) {
        $(this.element.nativeElement).fullCalendar('refetchEvents');
        if (events && events.length > 0) {
            // $(this.element.nativeElement).fullCalendar('renderEvents', events);
            // $(this.element.nativeElement).fullCalendar('rerenderEvents');
        }
    }

}
