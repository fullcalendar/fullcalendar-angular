(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('jquery'), require('fullcalendar')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'jquery', 'fullcalendar'], factory) :
	(factory((global.ngFullcalendar = global.ngFullcalendar || {}),global.ng.core,global.jQuery));
}(this, (function (exports,_angular_core,jquery) { 'use strict';

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
var $ = jquery;
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(element, zone) {
        this.element = element;
        this.zone = zone;
        this.debug = false;
        this.eventId = 1;
        this.eventIds = [];
        this._eventsModel = [];
        // Notify when things change
        this.eventsModelChange = new _angular_core.EventEmitter();
        // Various events
        this.eventDrop = new _angular_core.EventEmitter();
        this.eventResize = new _angular_core.EventEmitter();
        this.eventResizeStart = new _angular_core.EventEmitter();
        this.eventResizeStop = new _angular_core.EventEmitter();
        this.eventClick = new _angular_core.EventEmitter();
        this.clickButton = new _angular_core.EventEmitter();
        this.windowResize = new _angular_core.EventEmitter();
        this.viewRender = new _angular_core.EventEmitter();
        this.eventAfterRender = new _angular_core.EventEmitter();
        this.eventAfterAllRender = new _angular_core.EventEmitter();
        this.viewDestroy = new _angular_core.EventEmitter();
        this.eventRender = new _angular_core.EventEmitter();
        this.eventDestroy = new _angular_core.EventEmitter();
        this.eventMouseOver = new _angular_core.EventEmitter();
        this.eventMouseOut = new _angular_core.EventEmitter();
        this.initialized = new _angular_core.EventEmitter();
        this.select = new _angular_core.EventEmitter();
        this.unselect = new _angular_core.EventEmitter();
        this.dayClick = new _angular_core.EventEmitter();
        this.navLinkDayClick = new _angular_core.EventEmitter();
        this.navLinkWeekClick = new _angular_core.EventEmitter();
        this.eventDragStart = new _angular_core.EventEmitter();
        this.eventDragStop = new _angular_core.EventEmitter();
        this.drop = new _angular_core.EventEmitter();
        this.eventReceive = new _angular_core.EventEmitter();
        this.dayRender = new _angular_core.EventEmitter();
        this.resourceRender = new _angular_core.EventEmitter();
    }
    Object.defineProperty(CalendarComponent.prototype, "eventsModel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._eventsModel;
        },
        set: /**
         * @param {?} newEvents
         * @return {?}
         */
        function (newEvents) {
            var _this = this;
            if (this.debug) {
                console.log('set eventsModel', newEvents);
            }
            // Possibly setting events to null
            if (!newEvents) {
                newEvents = [];
            }
            // Check each event, add new ids if needed
            var /** @type {?} */ existingEventIds = this.eventIds;
            var /** @type {?} */ tempEventIds = [];
            newEvents.forEach(function (newEvent) {
                if (!('$$id' in newEvent)) {
                    newEvent['$$id'] = _this.eventId++;
                }
                var /** @type {?} */ existingIdIndex = _this.eventIds.indexOf(newEvent['$$id']);
                if (existingIdIndex === -1) {
                    if (_this.debug) {
                        console.log('adding event and sticking', newEvent);
                    }
                    $(_this.element.nativeElement).fullCalendar('renderEvent', newEvent, true);
                }
                else {
                    delete (existingEventIds[existingIdIndex]);
                }
                tempEventIds.push(newEvent['$$id']);
            });
            // There may be excess events
            existingEventIds.forEach(function (existingEventId) {
                if (_this.debug) {
                    console.log('removing event', existingEventId);
                }
                $(_this.element.nativeElement).fullCalendar('removeEvents', function (event) {
                    return event['$$id'] === existingEventId;
                });
            });
            // Update the data and emit the change
            this.eventIds = tempEventIds;
            this._eventsModel = newEvents;
            this.eventsModelChange.next(this._eventsModel);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.updaterOptions();
            _this.zone.runOutsideAngular(function () {
                _this.options.events = _this.eventsModel;
                $(_this.element.nativeElement).fullCalendar(_this.options);
                // this.eventsModelChange.next(this.options.events);
                // this.eventsModelChange.next(this.options.events);
                _this.initialized.emit(true);
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
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
    };
    // Update an existing event in array with new data
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.updateEventsModel = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.debug) {
            console.log('updateEventsModel', event);
        }
        var /** @type {?} */ tempEvents = [];
        this.eventsModel.forEach(function (eventModel, index) {
            if (eventModel['$$id'] === event['$$id']) {
                tempEvents.push(event);
            }
            else {
                tempEvents.push(eventModel);
            }
        });
        // Update and bypass setter since it is already drawn
        this._eventsModel = tempEvents;
    };
    // Add new event to array
    /**
     * @param {?} newEvent
     * @return {?}
     */
    CalendarComponent.prototype.addEventsModel = /**
     * @param {?} newEvent
     * @return {?}
     */
    function (newEvent) {
        if (this.debug) {
            console.log('addEventsModel', newEvent);
        }
        var /** @type {?} */ events = this.eventsModel;
        events.push(newEvent);
        this.eventsModel = events;
    };
    // Remove event from array
    /**
     * @param {?} deadEvent
     * @return {?}
     */
    CalendarComponent.prototype.removeEventsModel = /**
     * @param {?} deadEvent
     * @return {?}
     */
    function (deadEvent) {
        var /** @type {?} */ tempEvents = [];
        this.eventsModel.forEach(function (eventModel, index) {
            if (eventModel['$$id'] !== deadEvent['$$id']) {
                tempEvents.push(eventModel);
            }
        });
        this.eventsModel = tempEvents;
    };
    // All the callbacks are defined here
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updaterOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ elem = $(this.element.nativeElement);
        // Event is dropped
        this.options.eventDrop = function (event, duration, revertFunc, jsEvent, ui, view) {
            var /** @type {?} */ detail = {
                event: event, duration: duration, revertFunc: revertFunc, jsEvent: jsEvent, ui: ui, view: view
            };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDrop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        // Event is resized
        this.options.eventResize = function (event, duration, revertFunc, jsEvent, ui, view) {
            var /** @type {?} */ detail = {
                event: event, duration: duration, revertFunc: revertFunc, jsEvent: jsEvent, ui: ui, view: view
            };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventResize', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventResizeStart = function (event, jsEvent, ui, view) {
            var /** @type {?} */ detail = {
                event: event, jsEvent: jsEvent, ui: ui, view: view
            };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventResizeStart', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventResizeStop = function (event, jsEvent, ui, view) {
            var /** @type {?} */ detail = {
                event: event, jsEvent: jsEvent, ui: ui, view: view
            };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventResizeStop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventRender = function (event, element, view) {
            if (_this.debug) {
                console.log('eventRender', event);
            }
            var /** @type {?} */ detail = { event: event, element: element, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventAfterRender = function (event, element, view) {
            var /** @type {?} */ detail = { event: event, element: element, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventAfterRender', {
                bubbles: true,
                detail: detail
            });
            _this.updateEventsModel(event);
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventClick = function (event, jsEvent, view) {
            var /** @type {?} */ detail = { event: event, jsEvent: jsEvent, view: view };
            if (_this.debug) {
                console.log('eventClick', detail);
            }
            var /** @type {?} */ widgetEvent = new CustomEvent('eventClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventDestroy = function (event, element, view) {
            var /** @type {?} */ detail = { event: event, element: element, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDestroy', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.windowResize = function (view) {
            var /** @type {?} */ detail = { view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('windowResize', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.viewRender = function (view, element) {
            var /** @type {?} */ detail = { view: view, element: element };
            var /** @type {?} */ widgetEvent = new CustomEvent('viewRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.viewDestroy = function (view, element) {
            var /** @type {?} */ detail = { view: view, element: element };
            var /** @type {?} */ widgetEvent = new CustomEvent('viewDestroy', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.select = function (start, end, jsEvent, view, resource) {
            var /** @type {?} */ detail = { start: start, end: end, jsEvent: jsEvent, view: view, resource: resource };
            var /** @type {?} */ widgetEvent = new CustomEvent('select', {
                bubbles: true,
                detail: detail
            });
            var /** @type {?} */ newEvent = {
                title: 'Untitled',
                start: start,
                end: end
            };
            // Add the new event to the eventsModel
            // Add the new event to the eventsModel
            _this.addEventsModel(newEvent);
            $(_this.element.nativeElement).fullCalendar('unselect');
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.unselect = function (jsEvent, view) {
            var /** @type {?} */ detail = { view: view, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('unselect', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.dayClick = function (date, jsEvent, view) {
            var /** @type {?} */ detail = { date: date, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('dayClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.navLinkDayClick = function (date, jsEvent) {
            var /** @type {?} */ detail = { date: date, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('navLinkDayClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.navLinkWeekClick = function (weekStart, jsEvent) {
            var /** @type {?} */ detail = { weekStart: weekStart, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('navLinkWeekClick', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventDragStart = function (event, jsEvent, ui, view) {
            var /** @type {?} */ detail = { event: event, jsEvent: jsEvent, ui: ui, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDragStart', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventDragStop = function (event, jsEvent, ui, view) {
            var /** @type {?} */ detail = { event: event, jsEvent: jsEvent, ui: ui, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDragStop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventMouseover = function (event, jsEvent, view) {
            var /** @type {?} */ detail = { event: event, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventMouseover', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventMouseout = function (event, jsEvent, view) {
            var /** @type {?} */ detail = { event: event, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventMouseout', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.drop = function (date, jsEvent, ui, resourceId) {
            var /** @type {?} */ detail = { date: date, jsEvent: jsEvent, ui: ui, resourceId: resourceId };
            var /** @type {?} */ widgetEvent = new CustomEvent('drop', {
                bubbles: true,
                detail: detail
            });
            // probably need to add an event - not handled!
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventReceive = function (event) {
            var /** @type {?} */ detail = { event: event };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventReceive', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.dayRender = function (date, cell) {
            var /** @type {?} */ detail = { date: date, cell: cell };
            var /** @type {?} */ widgetEvent = new CustomEvent('dayRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.resourceRender = function (resourceObj, labelTds, bodyTds) {
            var /** @type {?} */ detail = { resourceObj: resourceObj, labelTds: labelTds, bodyTds: bodyTds };
            var /** @type {?} */ widgetEvent = new CustomEvent('resourceRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
    };
    CalendarComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'ng-fullcalendar',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
        { type: _angular_core.NgZone, },
    ]; };
    CalendarComponent.propDecorators = {
        "eventsModel": [{ type: _angular_core.Input },],
        "eventsModelChange": [{ type: _angular_core.Output },],
        "options": [{ type: _angular_core.Input },],
        "eventDrop": [{ type: _angular_core.Output },],
        "eventResize": [{ type: _angular_core.Output },],
        "eventResizeStart": [{ type: _angular_core.Output },],
        "eventResizeStop": [{ type: _angular_core.Output },],
        "eventClick": [{ type: _angular_core.Output },],
        "clickButton": [{ type: _angular_core.Output },],
        "windowResize": [{ type: _angular_core.Output },],
        "viewRender": [{ type: _angular_core.Output },],
        "eventAfterRender": [{ type: _angular_core.Output },],
        "eventAfterAllRender": [{ type: _angular_core.Output },],
        "viewDestroy": [{ type: _angular_core.Output },],
        "eventRender": [{ type: _angular_core.Output },],
        "eventDestroy": [{ type: _angular_core.Output },],
        "eventMouseOver": [{ type: _angular_core.Output },],
        "eventMouseOut": [{ type: _angular_core.Output },],
        "initialized": [{ type: _angular_core.Output },],
        "select": [{ type: _angular_core.Output },],
        "unselect": [{ type: _angular_core.Output },],
        "dayClick": [{ type: _angular_core.Output },],
        "navLinkDayClick": [{ type: _angular_core.Output },],
        "navLinkWeekClick": [{ type: _angular_core.Output },],
        "eventDragStart": [{ type: _angular_core.Output },],
        "eventDragStop": [{ type: _angular_core.Output },],
        "drop": [{ type: _angular_core.Output },],
        "eventReceive": [{ type: _angular_core.Output },],
        "dayRender": [{ type: _angular_core.Output },],
        "resourceRender": [{ type: _angular_core.Output },],
    };
    return CalendarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FullCalendarModule = /** @class */ (function () {
    function FullCalendarModule() {
    }
    FullCalendarModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [CalendarComponent],
                    exports: [CalendarComponent],
                },] },
    ];
    return FullCalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonClickModel = /** @class */ (function () {
    function ButtonClickModel() {
    }
    return ButtonClickModel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UpdateEventModel = /** @class */ (function () {
    function UpdateEventModel() {
    }
    return UpdateEventModel;
}());

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

exports.FullCalendarModule = FullCalendarModule;
exports.CalendarComponent = CalendarComponent;
exports.ButtonClickModel = ButtonClickModel;
exports.UpdateEventModel = UpdateEventModel;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-fullcalendar.umd.js.map
