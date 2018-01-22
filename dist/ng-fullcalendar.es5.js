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


(function () {
    /**
     * @param {?} event
     * @param {?} params
     * @return {?}
     */
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var /** @type {?} */ evt = (document.createEvent('CustomEvent'));
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    
    CustomEvent.prototype = Event.prototype;
    window.CustomEvent = (CustomEvent);
})();

var CalendarComponent = (function () {
    /**
     * @param {?} element
     * @param {?} zone
     */
    function CalendarComponent(element, zone) {
        this.element = element;
        this.zone = zone;
        this.eventDrop = new EventEmitter();
        this.eventResize = new EventEmitter();
        this.eventClick = new EventEmitter();
        this.clickButton = new EventEmitter();
        this.windowResize = new EventEmitter();
        this.viewRender = new EventEmitter();
        this.viewDestroy = new EventEmitter();
        this.eventRender = new EventEmitter();
        this.initialized = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngOnInit = function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.updaterOptions();
            _this.zone.runOutsideAngular(function () {
                $('ng-fullcalendar').fullCalendar(_this.options);
                _this.initialized.emit(true);
                // Click listeners
                var /** @type {?} */ elem = document.getElementsByTagName('ng-fullcalendar');
                $('[class ^="fc"][class *="button"]').click(function (el) {
                    var /** @type {?} */ classnames = el.currentTarget.className.split(' ');
                    classnames.forEach(function (name) {
                        if (name.indexOf('button') == name.length - 6) {
                            name = name.replace(/fc|button|-/g, '');
                            if (name != '') {
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
                    elem[0].dispatchEvent(widgetEvent);
                }
            });
        }, 100);
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterContentChecked = function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.ngAfterViewChecked = function () {
    };
    /**
     * @return {?}
     */
    CalendarComponent.prototype.updaterOptions = function () {
        var /** @type {?} */ elem = document.getElementsByTagName('ng-fullcalendar');
        this.options.eventDrop = function (event, duration) {
            var /** @type {?} */ detail = { event: event, duration: duration };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventDrop', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventResize = function (event, duration) {
            var /** @type {?} */ detail = { event: event, duration: duration };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventResize', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventRender = function (event, element) {
            var /** @type {?} */ detail = { event: event, element: element };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventRender', {
                bubbles: true,
                detail: detail
            });
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.eventClick = function (event) {
            var /** @type {?} */ detail = { event: event, duration: null };
            var /** @type {?} */ widgetEvent = new CustomEvent('eventClick', {
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
            if (elem && elem[0]) {
                elem[0].dispatchEvent(widgetEvent);
            }
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
            elem[0].dispatchEvent(widgetEvent);
        };
        this.options.unselect = function (view, jsEvent) {
            var /** @type {?} */ detail = { view: view, jsEvent: jsEvent };
            var /** @type {?} */ widgetEvent = new CustomEvent('unselect', {
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
    CalendarComponent.prototype.fullCalendar = function () {
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
    CalendarComponent.prototype.updateEvent = function (event) {
        return $(this.element.nativeElement).fullCalendar('updateEvent', event);
    };
    /**
     * @param {?} idOrFilter
     * @return {?}
     */
    CalendarComponent.prototype.clientEvents = function (idOrFilter) {
        return $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
    };
    return CalendarComponent;
}());
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-fullcalendar',
                template: '<div id="calendar"></div>',
            },] },
];
/**
 * @nocollapse
 */
CalendarComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: NgZone, },
]; };
CalendarComponent.propDecorators = {
    'options': [{ type: Input },],
    'eventDrop': [{ type: Output },],
    'eventResize': [{ type: Output },],
    'eventClick': [{ type: Output },],
    'clickButton': [{ type: Output },],
    'windowResize': [{ type: Output },],
    'viewRender': [{ type: Output },],
    'viewDestroy': [{ type: Output },],
    'eventRender': [{ type: Output },],
    'initialized': [{ type: Output },],
    'select': [{ type: Output },],
    'unselect': [{ type: Output },],
};

var FullCalendarModule = (function () {
    function FullCalendarModule() {
    }
    return FullCalendarModule;
}());
FullCalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CalendarComponent],
                exports: [CalendarComponent],
            },] },
];
/**
 * @nocollapse
 */
FullCalendarModule.ctorParameters = function () { return []; };

var ButtonClickModel = (function () {
    function ButtonClickModel() {
    }
    return ButtonClickModel;
}());

var UpdateEventModel = (function () {
    function UpdateEventModel() {
    }
    return UpdateEventModel;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { FullCalendarModule, CalendarComponent, ButtonClickModel, UpdateEventModel };
//# sourceMappingURL=ng-fullcalendar.es5.js.map
