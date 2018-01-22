(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('jquery'), require('fullcalendar')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'jquery', 'fullcalendar'], factory) :
	(factory((global.ngFullcalendar = global.ngFullcalendar || {}),global.ng.core,global.jQuery));
}(this, (function (exports,_angular_core,$) { 'use strict';

$ = 'default' in $ ? $['default'] : $;

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
        this.eventDrop = new _angular_core.EventEmitter();
        this.eventResize = new _angular_core.EventEmitter();
        this.eventClick = new _angular_core.EventEmitter();
        this.clickButton = new _angular_core.EventEmitter();
        this.windowResize = new _angular_core.EventEmitter();
        this.viewRender = new _angular_core.EventEmitter();
        this.viewDestroy = new _angular_core.EventEmitter();
        this.eventRender = new _angular_core.EventEmitter();
        this.initialized = new _angular_core.EventEmitter();
        this.select = new _angular_core.EventEmitter();
        this.unselect = new _angular_core.EventEmitter();
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
    { type: _angular_core.Component, args: [{
                selector: 'ng-fullcalendar',
                template: '<div id="calendar"></div>',
            },] },
];
/**
 * @nocollapse
 */
CalendarComponent.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: _angular_core.NgZone, },
]; };
CalendarComponent.propDecorators = {
    'options': [{ type: _angular_core.Input },],
    'eventDrop': [{ type: _angular_core.Output },],
    'eventResize': [{ type: _angular_core.Output },],
    'eventClick': [{ type: _angular_core.Output },],
    'clickButton': [{ type: _angular_core.Output },],
    'windowResize': [{ type: _angular_core.Output },],
    'viewRender': [{ type: _angular_core.Output },],
    'viewDestroy': [{ type: _angular_core.Output },],
    'eventRender': [{ type: _angular_core.Output },],
    'initialized': [{ type: _angular_core.Output },],
    'select': [{ type: _angular_core.Output },],
    'unselect': [{ type: _angular_core.Output },],
};

var FullCalendarModule = (function () {
    function FullCalendarModule() {
    }
    return FullCalendarModule;
}());
FullCalendarModule.decorators = [
    { type: _angular_core.NgModule, args: [{
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

exports.FullCalendarModule = FullCalendarModule;
exports.CalendarComponent = CalendarComponent;
exports.ButtonClickModel = ButtonClickModel;
exports.UpdateEventModel = UpdateEventModel;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-fullcalendar.umd.js.map
