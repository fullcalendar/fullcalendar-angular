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
class CalendarComponent {
    /**
     * @param {?} element
     * @param {?} zone
     */
    constructor(element, zone) {
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
    /**
     * @return {?}
     */
    get eventsModel() {
        return this._eventsModel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set eventsModel(value) {
        this._eventsModel = value;
        if (this._reRender) {
            setTimeout(() => {
                this.renderEvents(value);
            }, 50);
        }
        else {
            this._reRender = true;
        }
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
                $(this.element.nativeElement).fullCalendar(this.options);
                this._eventsModel = this.options.events;
                this.eventsModelChange.next(this.options.events);
                this.initialized.emit(true);
                // Click listeners
                let /** @type {?} */ elem = document.getElementsByTagName('ng-fullcalendar');
                $('[class ^="fc"][class *="button"]').click(el => {
                    let /** @type {?} */ classnames = el.currentTarget.className.split(' ');
                    classnames.forEach(name => {
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
                    let /** @type {?} */ data = $('ng-fullcalendar').fullCalendar('getDate');
                    let /** @type {?} */ currentDetail = {
                        buttonType: buttonType,
                        data: data
                    };
                    var /** @type {?} */ widgetEvent = new CustomEvent('clickButton', {
                        bubbles: true,
                        detail: currentDetail
                    });
                    for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                        elem[i].dispatchEvent(widgetEvent);
                    }
                }
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
     * @return {?}
     */
    updateEventsBeforeResize() {
        let /** @type {?} */ events = this.fullCalendar('clientEvents');
        this._reRender = false;
        this.eventsModel = events;
        this.eventsModelChange.next(events);
    }
    /**
     * @return {?}
     */
    updaterOptions() {
        let /** @type {?} */ elem = document.getElementsByTagName('ng-fullcalendar');
        this.options.eventDrop = (event, duration, revertFunc) => {
            let /** @type {?} */ detail = { event: event, duration: duration, revertFunc: revertFunc };
            let /** @type {?} */ widgetEvent = new CustomEvent('eventDrop', {
                bubbles: true,
                detail: detail
            });
            this.updateEventsBeforeResize();
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.eventResize = (event, duration, revertFunc) => {
            let /** @type {?} */ detail = { event: event, duration: duration, revertFunc: revertFunc };
            let /** @type {?} */ widgetEvent = new CustomEvent('eventResize', {
                bubbles: true,
                detail: detail
            });
            this.updateEventsBeforeResize();
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
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
        this.options.eventRender = function (event, element, view) {
            let /** @type {?} */ detail = { event: event, element: element, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventRender', {
                bubbles: true,
                detail: detail
            });
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.eventDestroy = (event, element, view) => {
            let /** @type {?} */ detail = { event: event, element: element, view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventDestroy', {
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
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventClick = (event, jsEvent, view) => {
            let /** @type {?} */ detail = { event: event, duration: null, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventClick', {
                bubbles: true,
                detail: detail
            });
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.windowResize = function (view) {
            let /** @type {?} */ detail = { view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('windowResize', {
                bubbles: true,
                detail: detail
            });
            if (elem && elem[0]) {
                for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                    elem[i].dispatchEvent(widgetEvent);
                }
            }
        };
        this.options.viewRender = function (view, element) {
            let /** @type {?} */ detail = { view: view, element: element };
            var /** @type {?} */ widgetEvent = new CustomEvent('viewRender', {
                bubbles: true,
                detail: detail
            });
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.viewDestroy = function (view, element) {
            let /** @type {?} */ detail = { view: view, element: element };
            var /** @type {?} */ widgetEvent = new CustomEvent('viewDestroy', {
                bubbles: true,
                detail: detail
            });
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.select = function (start, end, jsEvent, view, resource) {
            let /** @type {?} */ detail = { start: start, end: end, jsEvent: jsEvent, view: view, resource: resource };
            var /** @type {?} */ widgetEvent = new CustomEvent('select', {
                bubbles: true,
                detail: detail
            });
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.unselect = function (view, jsEvent) {
            let /** @type {?} */ detail = { view: view, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('unselect', {
                bubbles: true,
                detail: detail
            });
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.dayClick = function (date, jsEvent, view) {
            let /** @type {?} */ detail = { date: date, jsEvent: jsEvent, view: view };
            var /** @type {?} */ widgetEvent = new CustomEvent('dayClick', {
                bubbles: true,
                detail: detail
            });
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.navLinkDayClick = function (date, jsEvent) {
            let /** @type {?} */ detail = { date: date, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('navLinkDayClick', {
                bubbles: true,
                detail: detail
            });
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
        };
        this.options.navLinkWeekClick = function (weekStart, jsEvent) {
            let /** @type {?} */ detail = { weekStart: weekStart, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('navLinkWeekClick', {
                bubbles: true,
                detail: detail
            });
            for (let /** @type {?} */ i = 0; i < elem.length; i++) {
                elem[i].dispatchEvent(widgetEvent);
            }
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
            const /** @type {?} */ widgetEvent = new CustomEvent('eventMouseOver', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventMouseout = (event, jsEvent, view) => {
            let /** @type {?} */ detail = { event: event, jsEvent: jsEvent, view: view };
            const /** @type {?} */ widgetEvent = new CustomEvent('eventMouseOut', {
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
    /**
     * @param {...?} args
     * @return {?}
     */
    fullCalendar(...args) {
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
    /**
     * @param {?} event
     * @return {?}
     */
    updateEvent(event) {
        return $(this.element.nativeElement).fullCalendar('updateEvent', event);
    }
    /**
     * @param {?} idOrFilter
     * @return {?}
     */
    clientEvents(idOrFilter) {
        return $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
    }
    /**
     * @param {?} events
     * @return {?}
     */
    renderEvents(events) {
        $(this.element.nativeElement).fullCalendar('removeEvents');
        if (events && events.length > 0) {
            $(this.element.nativeElement).fullCalendar('renderEvents', events, true);
            $(this.element.nativeElement).fullCalendar('rerenderEvents');
        }
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
