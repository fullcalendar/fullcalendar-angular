import { Component, ElementRef, EventEmitter, Input, NgModule, NgZone, Output } from '@angular/core';
import 'fullcalendar';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
(function () {
    /**
     * @param {?} event
     * @param {?} params
     * @return {?}
     */
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var /** @type {?} */ evt = /** @type {?} */ (document.createEvent('CustomEvent'));
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    
    CustomEvent.prototype = Event.prototype;
    window.CustomEvent = /** @type {?} */ (CustomEvent);
})();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const $ = jquery;
class CalendarComponent {
    /**
     * @param {?} element
     * @param {?} zone
     */
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.debug = false;
        this.eventId = 1;
        this.eventIds = [];
        this._eventsModel = [];
        // Notify when things change
        this.eventsModelChange = new EventEmitter();
        // Various events
        this.eventDrop = new EventEmitter();
        this.eventResize = new EventEmitter();
        this.eventResizeStart = new EventEmitter();
        this.eventResizeStop = new EventEmitter();
        this.eventClick = new EventEmitter();
        this.clickButton = new EventEmitter();
        this.windowResize = new EventEmitter();
        this.viewRender = new EventEmitter();
        this.eventAfterRender = new EventEmitter();
        this.eventAfterAllRender = new EventEmitter();
        this.viewDestroy = new EventEmitter();
        this.eventRender = new EventEmitter();
        this.eventDestroy = new EventEmitter();
        this.eventMouseOver = new EventEmitter();
        this.eventMouseOut = new EventEmitter();
        this.initialized = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.dayClick = new EventEmitter();
        this.navLinkDayClick = new EventEmitter();
        this.navLinkWeekClick = new EventEmitter();
        this.eventDragStart = new EventEmitter();
        this.eventDragStop = new EventEmitter();
        this.drop = new EventEmitter();
        this.eventReceive = new EventEmitter();
        this.dayRender = new EventEmitter();
        this.resourceRender = new EventEmitter();
    }
    /**
     * @param {?} newEvents
     * @return {?}
     */
    set eventsModel(newEvents) {
        if (this.debug) {
            console.log('set eventsModel', newEvents);
        }
        // Possibly setting events to null
        if (!newEvents) {
            newEvents = [];
        }
        // Check each event, add new ids if needed
        const /** @type {?} */ existingEventIds = this.eventIds;
        const /** @type {?} */ tempEventIds = [];
        newEvents.forEach((newEvent) => {
            if (!('$$id' in newEvent)) {
                newEvent['$$id'] = this.eventId++;
            }
            const /** @type {?} */ existingIdIndex = this.eventIds.indexOf(newEvent['$$id']);
            if (existingIdIndex === -1) {
                if (this.debug) {
                    console.log('adding event and sticking', newEvent);
                }
                $(this.element.nativeElement).fullCalendar('renderEvent', newEvent, true);
            }
            else {
                delete (existingEventIds[existingIdIndex]);
            }
            tempEventIds.push(newEvent['$$id']);
        });
        // There may be excess events
        existingEventIds.forEach((existingEventId) => {
            if (this.debug) {
                console.log('removing event', existingEventId);
            }
            $(this.element.nativeElement).fullCalendar('removeEvents', function (event) {
                return event['$$id'] === existingEventId;
            });
        });
        // Update the data and emit the change
        this.eventIds = tempEventIds;
        this._eventsModel = newEvents;
        this.eventsModelChange.next(this._eventsModel);
    }
    /**
     * @return {?}
     */
    get eventsModel() {
        return this._eventsModel;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => {
            this.updaterOptions();
            this.zone.runOutsideAngular(() => {
                this.options.events = this.eventsModel;
                $(this.element.nativeElement).fullCalendar(this.options);
                // this.eventsModelChange.next(this.options.events);
                this.initialized.emit(true);
                // Click listeners
                /*
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
                                */
            });
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateEventsModel(event) {
        if (this.debug) {
            console.log('updateEventsModel', event);
        }
        const /** @type {?} */ tempEvents = [];
        this.eventsModel.forEach((eventModel, index) => {
            if (eventModel['$$id'] === event['$$id']) {
                tempEvents.push(event);
            }
            else {
                tempEvents.push(eventModel);
            }
        });
        // Update and bypass setter since it is already drawn
        this._eventsModel = tempEvents;
    }
    /**
     * @param {?} newEvent
     * @return {?}
     */
    addEventsModel(newEvent) {
        if (this.debug) {
            console.log('addEventsModel', newEvent);
        }
        const /** @type {?} */ events = this.eventsModel;
        events.push(newEvent);
        this.eventsModel = events;
    }
    /**
     * @param {?} deadEvent
     * @return {?}
     */
    removeEventsModel(deadEvent) {
        const /** @type {?} */ tempEvents = [];
        this.eventsModel.forEach((eventModel, index) => {
            if (eventModel['$$id'] !== deadEvent['$$id']) {
                tempEvents.push(eventModel);
            }
        });
        this.eventsModel = tempEvents;
    }
    /**
     * @return {?}
     */
    updaterOptions() {
        let /** @type {?} */ elem = $(this.element.nativeElement);
        // Event is dropped
        this.options.eventDrop = (event, duration, revertFunc, jsEvent, ui, view) => {
            let /** @type {?} */ detail = {
                event: event, duration: duration, revertFunc: revertFunc, jsEvent: jsEvent, ui: ui, view: view
            };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventDrop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        // Event is resized
        this.options.eventResize = (event, duration, revertFunc, jsEvent, ui, view) => {
            let /** @type {?} */ detail = {
                event: event, duration: duration, revertFunc: revertFunc, jsEvent: jsEvent, ui: ui, view: view
            };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventResize', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventResizeStart = (event, jsEvent, ui, view) => {
            let /** @type {?} */ detail = {
                event: event, jsEvent: jsEvent, ui: ui, view: view
            };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventResizeStart', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventResizeStop = (event, jsEvent, ui, view) => {
            let /** @type {?} */ detail = {
                event: event, jsEvent: jsEvent, ui: ui, view: view
            };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventResizeStop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventRender = (event, element, view) => {
            if (this.debug) {
                console.log('eventRender', event);
            }
            let /** @type {?} */ detail = { event: event, element: element, view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventAfterRender = (event, element, view) => {
            let /** @type {?} */ detail = { event: event, element: element, view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventAfterRender', {
                bubbles: true,
                detail: detail
            });
            this.updateEventsModel(event);
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventClick = (event, jsEvent, view) => {
            let /** @type {?} */ detail = { event: event, jsEvent: jsEvent, view: view };
            if (this.debug) {
                console.log('eventClick', detail);
            }
            const /** @type {?} */ widgetEvent = new CustomEvent('eventClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventDestroy = (event, element, view) => {
            let /** @type {?} */ detail = { event: event, element: element, view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventDestroy', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.windowResize = (view) => {
            let /** @type {?} */ detail = { view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('windowResize', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.viewRender = function (view, element) {
            let /** @type {?} */ detail = { view: view, element: element };
            const /** @type {?} */ widgetEvent = new CustomEvent('viewRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.viewDestroy = function (view, element) {
            let /** @type {?} */ detail = { view: view, element: element };
            const /** @type {?} */ widgetEvent = new CustomEvent('viewDestroy', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.select = (start, end, jsEvent, view, resource) => {
            let /** @type {?} */ detail = { start: start, end: end, jsEvent: jsEvent, view: view, resource: resource };
            const /** @type {?} */ widgetEvent = new CustomEvent('select', {
                bubbles: true,
                detail: detail
            });
            const /** @type {?} */ newEvent = {
                title: 'Untitled',
                start: start,
                end: end
            };
            // Add the new event to the eventsModel
            this.addEventsModel(newEvent);
            $(this.element.nativeElement).fullCalendar('unselect');
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.unselect = (jsEvent, view) => {
            let /** @type {?} */ detail = { view: view, jsEvent: jsEvent };
            const /** @type {?} */ widgetEvent = new CustomEvent('unselect', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.dayClick = (date, jsEvent, view) => {
            let /** @type {?} */ detail = { date: date, jsEvent: jsEvent, view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('dayClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.navLinkDayClick = (date, jsEvent) => {
            let /** @type {?} */ detail = { date: date, jsEvent: jsEvent };
            const /** @type {?} */ widgetEvent = new CustomEvent('navLinkDayClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.navLinkWeekClick = (weekStart, jsEvent) => {
            let /** @type {?} */ detail = { weekStart: weekStart, jsEvent: jsEvent };
            const /** @type {?} */ widgetEvent = new CustomEvent('navLinkWeekClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventDragStart = (event, jsEvent, ui, view) => {
            let /** @type {?} */ detail = { event: event, jsEvent: jsEvent, ui: ui, view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventDragStart', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventDragStop = (event, jsEvent, ui, view) => {
            let /** @type {?} */ detail = { event: event, jsEvent: jsEvent, ui: ui, view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventDragStop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventMouseover = (event, jsEvent, view) => {
            let /** @type {?} */ detail = { event: event, jsEvent: jsEvent, view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventMouseover', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventMouseout = (event, jsEvent, view) => {
            let /** @type {?} */ detail = { event: event, jsEvent: jsEvent, view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventMouseout', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.drop = (date, jsEvent, ui, resourceId) => {
            let /** @type {?} */ detail = { date: date, jsEvent: jsEvent, ui: ui, resourceId: resourceId };
            const /** @type {?} */ widgetEvent = new CustomEvent('drop', {
                bubbles: true,
                detail: detail
            });
            // probably need to add an event - not handled!
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventReceive = (event) => {
            let /** @type {?} */ detail = { event: event };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventReceive', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.dayRender = (date, cell) => {
            let /** @type {?} */ detail = { date: date, cell: cell };
            const /** @type {?} */ widgetEvent = new CustomEvent('dayRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.resourceRender = (resourceObj, labelTds, bodyTds) => {
            let /** @type {?} */ detail = { resourceObj: resourceObj, labelTds: labelTds, bodyTds: bodyTds };
            const /** @type {?} */ widgetEvent = new CustomEvent('resourceRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-fullcalendar',
                template: '',
            },] },
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgZone, },
];
CalendarComponent.propDecorators = {
    "eventsModel": [{ type: Input },],
    "eventsModelChange": [{ type: Output },],
    "options": [{ type: Input },],
    "eventDrop": [{ type: Output },],
    "eventResize": [{ type: Output },],
    "eventResizeStart": [{ type: Output },],
    "eventResizeStop": [{ type: Output },],
    "eventClick": [{ type: Output },],
    "clickButton": [{ type: Output },],
    "windowResize": [{ type: Output },],
    "viewRender": [{ type: Output },],
    "eventAfterRender": [{ type: Output },],
    "eventAfterAllRender": [{ type: Output },],
    "viewDestroy": [{ type: Output },],
    "eventRender": [{ type: Output },],
    "eventDestroy": [{ type: Output },],
    "eventMouseOver": [{ type: Output },],
    "eventMouseOut": [{ type: Output },],
    "initialized": [{ type: Output },],
    "select": [{ type: Output },],
    "unselect": [{ type: Output },],
    "dayClick": [{ type: Output },],
    "navLinkDayClick": [{ type: Output },],
    "navLinkWeekClick": [{ type: Output },],
    "eventDragStart": [{ type: Output },],
    "eventDragStop": [{ type: Output },],
    "drop": [{ type: Output },],
    "eventReceive": [{ type: Output },],
    "dayRender": [{ type: Output },],
    "resourceRender": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FullCalendarModule {
}
FullCalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CalendarComponent],
                exports: [CalendarComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonClickModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UpdateEventModel {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { FullCalendarModule, CalendarComponent, ButtonClickModel, UpdateEventModel };
//# sourceMappingURL=ng-fullcalendar.js.map
