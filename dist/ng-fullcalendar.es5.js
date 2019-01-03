import { Component, ElementRef, EventEmitter, Input, NgModule, NgZone, Output } from '@angular/core';
import $ from 'jquery';
import fullcalendar from 'fullcalendar';
$.fn.fullCalendar = function(options) {
	var args = Array.prototype.slice.call(arguments, 1); // for a possible method call
	var res = this; // what this function will return (this jQuery object by default)

	this.each(function(i, _element) { // loop each DOM element involved
		var element = $(_element);
		var calendar = element.data('fullCalendar'); // get the existing calendar object (if any)
		var singleRes; // the returned value of this single method call

		// a method call
		if (typeof options === 'string') {

			if (options === 'getCalendar') {
				if (!i) { // first element only
					res = calendar;
				}
			}
			else if (options === 'destroy') { // don't warn if no calendar object
				if (calendar) {
					calendar.destroy();
					element.removeData('fullCalendar');
				}
			}
			else if (!calendar) {
				FC.warn("Attempting to call a FullCalendar method on an element with no calendar.");
			}
			else if ($.isFunction(calendar[options])) {
				singleRes = calendar[options].apply(calendar, args);

				if (!i) {
					res = singleRes; // record the first method call result
				}
				if (options === 'destroy') { // for the destroy method, must remove Calendar object data
					element.removeData('fullCalendar');
				}
			}
			else {
				FC.warn("'" + options + "' is an unknown FullCalendar method.");
			}
		}
		// a new calendar initialization
		else if (!calendar) { // don't initialize twice
			calendar = new fullcalendar.Calendar(element, options);
			element.data('fullCalendar', calendar);
			calendar.render();
		}
	});

	return res;
};

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
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(element, zone) {
        this.element = element;
        this.zone = zone;
        this._reRender = true;
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
    Object.defineProperty(CalendarComponent.prototype, "eventsModel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._eventsModel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._eventsModel = value;
            if (this._reRender) {
                setTimeout(function () {
                    _this.renderEvents(value);
                }, 50);
            }
            else {
                this._reRender = true;
            }
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
                $(_this.element.nativeElement).fullCalendar(_this.options);
                _this._eventsModel = _this.options.events;
                _this.eventsModelChange.next(_this.options.events);
                _this.initialized.emit(true);
                // Click listeners
                var /** @type {?} */ elem = document.getElementsByTagName('ng-fullcalendar');
                $('[class ^="fc"][class *="button"]').click(function (el) {
                    var /** @type {?} */ classnames = el.currentTarget.className.split(' ');
                    classnames.forEach(function (name) {
                        if (name.indexOf('button') == name.length - 6) {
                            name = name.replace(/fc|button|-/g, '');
                            if (name != '') {
                                // this.renderEvents(this._eventsModel);
                                eventDispatch(name);
                            }
                        }
                    });
                });
                /**
                 * @param {?} buttonType
                 * @return {?}
                 */
                function eventDispatch(buttonType) {
                    var /** @type {?} */ data = $('ng-fullcalendar').fullCalendar('getDate');
                    var /** @type {?} */ currentDetail = {
                        buttonType: buttonType,
                        data: data
                    };
                    var /** @type {?} */ widgetEvent = new CustomEvent('clickButton', {
                        bubbles: true,
                        detail: currentDetail
                    });
                    for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                        elem[i].dispatchEvent(widgetEvent);
                    }
                }
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
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updateEventsBeforeResize = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ events = this.fullCalendar('clientEvents');
        this._reRender = false;
        this.eventsModel = events;
        this.eventsModelChange.next(events);
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updaterOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ elem = document.getElementsByTagName('ng-fullcalendar');
        this.options.eventDrop = function (event, duration, revertFunc) {
            var /** @type {?} */ detail = { event: event, duration: duration, revertFunc: revertFunc };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDrop', {
                bubbles: true,
                detail: detail
            });
            _this.updateEventsBeforeResize();
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.eventResize = function (event, duration, revertFunc) {
            var /** @type {?} */ detail = { event: event, duration: duration, revertFunc: revertFunc };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventResize', {
                bubbles: true,
                detail: detail
            });
            _this.updateEventsBeforeResize();
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
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
            var /** @type {?} */ detail = { event: event, element: element, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventRender', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.eventDestroy = function (event, element, view) {
            var /** @type {?} */ detail = { event: event, element: element, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDestroy', {
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
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventClick = function (event, jsEvent, view) {
            var /** @type {?} */ detail = { event: event, duration: null, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventClick', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.windowResize = function (view) {
            var /** @type {?} */ detail = { view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('windowResize', {
                bubbles: true,
                detail: detail
            });
            if (elem && elem[0]) {
                for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                    elem[i].dispatchEvent(widgetEvent);
                }
            }
        };
        this.options.viewRender = function (view, element) {
            var /** @type {?} */ detail = { view: view, element: element };
            var /** @type {?} */ widgetEvent = new CustomEvent('viewRender', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.viewDestroy = function (view, element) {
            var /** @type {?} */ detail = { view: view, element: element };
            var /** @type {?} */ widgetEvent = new CustomEvent('viewDestroy', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.select = function (start, end, jsEvent, view, resource) {
            var /** @type {?} */ detail = { start: start, end: end, jsEvent: jsEvent, view: view, resource: resource };
            var /** @type {?} */ widgetEvent = new CustomEvent('select', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.unselect = function (view, jsEvent) {
            var /** @type {?} */ detail = { view: view, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('unselect', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.dayClick = function (date, jsEvent, view) {
            var /** @type {?} */ detail = { date: date, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('dayClick', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.navLinkDayClick = function (date, jsEvent) {
            var /** @type {?} */ detail = { date: date, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('navLinkDayClick', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.navLinkWeekClick = function (weekStart, jsEvent) {
            var /** @type {?} */ detail = { weekStart: weekStart, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('navLinkWeekClick', {
                bubbles: true,
                detail: detail
            });
            for (var /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
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
            var /** @type {?} */ widgetEvent = new CustomEvent('eventMouseOver', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventMouseout = function (event, jsEvent, view) {
            var /** @type {?} */ detail = { event: event, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventMouseOut', {
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
    /**
     * @param {...?} args
     * @return {?}
     */
    CalendarComponent.prototype.fullCalendar = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarComponent.prototype.updateEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return $(this.element.nativeElement).fullCalendar('updateEvent', event);
    };
    /**
     * @param {?} idOrFilter
     * @return {?}
     */
    CalendarComponent.prototype.clientEvents = /**
     * @param {?} idOrFilter
     * @return {?}
     */
    function (idOrFilter) {
        return $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
    };
    /**
     * @param {?} events
     * @return {?}
     */
    CalendarComponent.prototype.renderEvents = /**
     * @param {?} events
     * @return {?}
     */
    function (events) {
        $(this.element.nativeElement).fullCalendar('removeEvents');
        if (events && events.length > 0) {
            $(this.element.nativeElement).fullCalendar('renderEvents', events, true);
            $(this.element.nativeElement).fullCalendar('rerenderEvents');
        }
    };
    CalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-fullcalendar',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    CalendarComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
    ]; };
    CalendarComponent.propDecorators = {
        "eventsModel": [{ type: Input, args: ['eventsModel',] },],
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
        { type: NgModule, args: [{
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

export { FullCalendarModule, CalendarComponent, ButtonClickModel, UpdateEventModel };
//# sourceMappingURL=ng-fullcalendar.es5.js.map
