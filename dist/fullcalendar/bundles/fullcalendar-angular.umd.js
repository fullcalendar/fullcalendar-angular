(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('fast-deep-equal'), require('@fullcalendar/core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@fullcalendar/angular', ['exports', 'fast-deep-equal', '@fullcalendar/core', '@angular/core'], factory) :
    (factory((global.fullcalendar = global.fullcalendar || {}, global.fullcalendar.angular = {}),global.deepEqual,global.FullCalendar,global.ng.core));
}(this, (function (exports,deepEqual,core,core$1) { 'use strict';

    deepEqual = deepEqual && deepEqual.hasOwnProperty('default') ? deepEqual['default'] : deepEqual;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    /*
    Really simple clone utility. Only copies plain arrays and objects. Transfers everything else as-is.
    Wanted to use a third-party lib, but none did exactly this.
    */
    /**
     * @param {?} input
     * @return {?}
     */
    function deepCopy(input) {
        if (Array.isArray(input)) {
            return input.map(deepCopy);
        }
        else if (input instanceof Date) {
            return new Date(input.valueOf());
        }
        else if (typeof input === 'object' && input) { // non-null object
            return mapHash(input, deepCopy);
        }
        else { // everything else (null, function, etc)
            return input;
        }
    }
    /**
     * @param {?} input
     * @param {?} func
     * @return {?}
     */
    function mapHash(input, func) {
        /** @type {?} */
        var output = {};
        for (var key in input) {
            if (hasOwnProperty.call(input, key)) {
                output[key] = func(input[key], key);
            }
        }
        return output;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    the docs point to this file as an index of options.
    when this files is moved, update the docs.
    */
    /** @type {?} */
    var INPUT_NAMES = [
        'header',
        'footer',
        'customButtons',
        'buttonIcons',
        'themeSystem',
        'bootstrapFontAwesome',
        'firstDay',
        'dir',
        'weekends',
        'hiddenDays',
        'fixedWeekCount',
        'weekNumbers',
        'weekNumbersWithinDays',
        'weekNumberCalculation',
        'businessHours',
        'showNonCurrentDates',
        'height',
        'contentHeight',
        'aspectRatio',
        'handleWindowResize',
        'windowResizeDelay',
        'eventLimit',
        'eventLimitClick',
        'timeZone',
        'now',
        'defaultView',
        'allDaySlot',
        'allDayText',
        'slotDuration',
        'slotLabelFormat',
        'slotLabelInterval',
        'snapDuration',
        'scrollTime',
        'minTime',
        'maxTime',
        'slotEventOverlap',
        'listDayFormat',
        'listDayAltFormat',
        'noEventsMessage',
        'defaultDate',
        'nowIndicator',
        'visibleRange',
        'validRange',
        'dateIncrement',
        'dateAlignment',
        'duration',
        'dayCount',
        'locales',
        'locale',
        'eventTimeFormat',
        'columnHeader',
        'columnHeaderFormat',
        'columnHeaderText',
        'columnHeaderHtml',
        'titleFormat',
        'weekLabel',
        'displayEventTime',
        'displayEventEnd',
        'eventLimitText',
        'dayPopoverFormat',
        'navLinks',
        'navLinkDayClick',
        'navLinkWeekClick',
        'selectable',
        'selectMirror',
        'selectMinDistance',
        'unselectAuto',
        'unselectCancel',
        'defaultAllDayEventDuration',
        'defaultTimedEventDuration',
        'cmdFormatter',
        'defaultRangeSeparator',
        'selectConstraint',
        'selectOverlap',
        'selectAllow',
        'editable',
        'eventStartEditable',
        'eventDurationEditable',
        'eventConstraint',
        'eventOverlap',
        'eventAllow',
        'eventClassName',
        'eventClassNames',
        'eventBackgroundColor',
        'eventBorderColor',
        'eventTextColor',
        'eventColor',
        'events',
        'eventSources',
        'allDayDefault',
        'startParam',
        'endParam',
        'lazyFetching',
        'nextDayThreshold',
        'eventOrder',
        'rerenderDelay',
        'dragRevertDuration',
        'dragScroll',
        'longPressDelay',
        'eventLongPressDelay',
        'droppable',
        'dropAccept',
        'eventDataTransform',
        'allDayMaintainDuration',
        'eventResizableFromStart',
        'timeGridEventMinHeight',
        'allDayHtml',
        'eventDragMinDistance',
        'eventSourceFailure',
        'eventSourceSuccess',
        'forceEventDuration',
        'progressiveEventRendering',
        'selectLongPressDelay',
        'selectMinDistance',
        'timeZoneParam',
        'titleRangeSeparator',
        // compound OptionsInput...
        'buttonText',
        'views',
        'plugins',
        // scheduler...
        'schedulerLicenseKey',
        'resources',
        'resourceLabelText',
        'resourceOrder',
        'filterResourcesWithEvents',
        'resourceText',
        'resourceGroupField',
        'resourceGroupText',
        'resourceAreaWidth',
        'resourceColumns',
        'resourcesInitiallyExpanded',
        'slotWidth',
        'datesAboveResources',
        'googleCalendarApiKey',
        'refetchResourcesOnNavigate',
        'eventResourceEditable'
    ];
    /** @type {?} */
    var INPUT_IS_DEEP = {
        header: true,
        footer: true,
        events: true,
        eventSources: true,
        resources: true
    };
    /** @type {?} */
    var OUTPUT_NAMES = [
        'windowResize',
        'dateClick',
        'eventClick',
        'eventMouseEnter',
        'eventMouseLeave',
        'select',
        'unselect',
        'loading',
        'eventPositioned',
        'eventDragStart',
        'eventDragStop',
        'eventDrop',
        'eventResizeStart',
        'eventResizeStop',
        'eventResize',
        'drop',
        'eventReceive',
        'eventLeave',
        '_destroyed',
        // TODO: make these inputs...
        'viewSkeletonRender',
        'viewSkeletonDestroy',
        'datesRender',
        'datesDestroy',
        'dayRender',
        'eventRender',
        'eventDestroy',
        'resourceRender'
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FullCalendarComponent = /** @class */ (function () {
        function FullCalendarComponent(element) {
            this.element = element;
            this.dirtyProps = {};
            this.deepCopies = {}; // holds frozen states
            this.windowResize = new core$1.EventEmitter();
            this.dateClick = new core$1.EventEmitter();
            this.eventClick = new core$1.EventEmitter();
            this.eventMouseEnter = new core$1.EventEmitter();
            this.eventMouseLeave = new core$1.EventEmitter();
            this.select = new core$1.EventEmitter();
            this.unselect = new core$1.EventEmitter();
            this.loading = new core$1.EventEmitter();
            this.eventPositioned = new core$1.EventEmitter();
            this.eventDragStart = new core$1.EventEmitter();
            this.eventDragStop = new core$1.EventEmitter();
            this.eventDrop = new core$1.EventEmitter();
            this.eventResizeStart = new core$1.EventEmitter();
            this.eventResizeStop = new core$1.EventEmitter();
            this.eventResize = new core$1.EventEmitter();
            this.drop = new core$1.EventEmitter();
            this.eventReceive = new core$1.EventEmitter();
            this.eventLeave = new core$1.EventEmitter();
            this._destroyed = new core$1.EventEmitter();
            // TODO: make these inputs...
            this.viewSkeletonRender = new core$1.EventEmitter();
            this.viewSkeletonDestroy = new core$1.EventEmitter();
            this.datesRender = new core$1.EventEmitter();
            this.datesDestroy = new core$1.EventEmitter();
            this.dayRender = new core$1.EventEmitter();
            this.eventRender = new core$1.EventEmitter();
            this.eventDestroy = new core$1.EventEmitter();
            this.resourceRender = new core$1.EventEmitter();
        }
        /**
         * @return {?}
         */
        FullCalendarComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.calendar = new core.Calendar(this.element.nativeElement, this.buildOptions());
                this.calendar.render();
            };
        /**
         * @private
         * @return {?}
         */
        FullCalendarComponent.prototype.buildOptions = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var options = {};
                OUTPUT_NAMES.forEach(( /**
                 * @param {?} outputName
                 * @return {?}
                 */function (outputName) {
                    options[outputName] = ( /**
                     * @param {...?} args
                     * @return {?}
                     */function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var _a;
                        (_a = _this[outputName]).emit.apply(_a, __spread(args));
                    });
                }));
                // do after outputs, so that inputs with same name override
                INPUT_NAMES.forEach(( /**
                 * @param {?} inputName
                 * @return {?}
                 */function (inputName) {
                    /** @type {?} */
                    var inputVal = _this[inputName];
                    if (inputVal !== undefined) { // unfortunately FC chokes when some props are set to undefined
                        if (_this.deepChangeDetection && INPUT_IS_DEEP[inputName]) {
                            inputVal = deepCopy(inputVal);
                            _this.deepCopies[inputName] = inputVal; // side effect!
                        }
                        options[inputName] = inputVal;
                    }
                }));
                return options;
            };
        /*
        called before ngOnChanges, allows us to manually detect input changes.
        called much more often than ngOnChanges.
        */
        /*
          called before ngOnChanges, allows us to manually detect input changes.
          called much more often than ngOnChanges.
          */
        /**
         * @return {?}
         */
        FullCalendarComponent.prototype.ngDoCheck = /*
          called before ngOnChanges, allows us to manually detect input changes.
          called much more often than ngOnChanges.
          */
            /**
             * @return {?}
             */
            function () {
                if (this.calendar && this.deepChangeDetection) { // not the initial render AND we do deep-mutation checks
                    // not the initial render AND we do deep-mutation checks
                    var deepCopies = this.deepCopies;
                    for (var inputName in INPUT_IS_DEEP) {
                        if (INPUT_IS_DEEP.hasOwnProperty(inputName)) {
                            /** @type {?} */
                            var inputVal = this[inputName];
                            if (inputVal !== undefined) { // unfortunately FC chokes when some props are set to undefined
                                if (!deepEqual(inputVal, deepCopies[inputName])) {
                                    /** @type {?} */
                                    var copy = deepCopy(inputVal);
                                    deepCopies[inputName] = copy;
                                    this.dirtyProps[inputName] = copy;
                                }
                            }
                        }
                    }
                }
            };
        /*
        called with confirmed changes to input references
        */
        /*
          called with confirmed changes to input references
          */
        /**
         * @param {?} changes
         * @return {?}
         */
        FullCalendarComponent.prototype.ngOnChanges = /*
          called with confirmed changes to input references
          */
            /**
             * @param {?} changes
             * @return {?}
             */
            function (changes) {
                if (this.calendar) { // not the initial render
                    for (var inputName in changes) {
                        if (changes.hasOwnProperty(inputName)) {
                            if (this.deepCopies[inputName] === undefined) { // not already handled in ngDoCheck
                                this.dirtyProps[inputName] = changes[inputName].currentValue;
                            }
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        FullCalendarComponent.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                var dirtyProps = this.dirtyProps;
                if (Object.keys(dirtyProps).length > 0) {
                    this.dirtyProps = {}; // clear first, in case the rerender causes new dirtiness
                    this.calendar.mutateOptions(dirtyProps, [], false, deepEqual);
                }
            };
        /**
         * @return {?}
         */
        FullCalendarComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.calendar.destroy();
                this.calendar = null;
            };
        /**
         * @return {?}
         */
        FullCalendarComponent.prototype.getApi = /**
         * @return {?}
         */
            function () {
                return this.calendar;
            };
        FullCalendarComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'full-calendar',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        FullCalendarComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef }
            ];
        };
        FullCalendarComponent.propDecorators = {
            deepChangeDetection: [{ type: core$1.Input }],
            header: [{ type: core$1.Input }],
            footer: [{ type: core$1.Input }],
            customButtons: [{ type: core$1.Input }],
            buttonIcons: [{ type: core$1.Input }],
            themeSystem: [{ type: core$1.Input }],
            bootstrapFontAwesome: [{ type: core$1.Input }],
            firstDay: [{ type: core$1.Input }],
            dir: [{ type: core$1.Input }],
            weekends: [{ type: core$1.Input }],
            hiddenDays: [{ type: core$1.Input }],
            fixedWeekCount: [{ type: core$1.Input }],
            weekNumbers: [{ type: core$1.Input }],
            weekNumbersWithinDays: [{ type: core$1.Input }],
            weekNumberCalculation: [{ type: core$1.Input }],
            businessHours: [{ type: core$1.Input }],
            showNonCurrentDates: [{ type: core$1.Input }],
            height: [{ type: core$1.Input }],
            contentHeight: [{ type: core$1.Input }],
            aspectRatio: [{ type: core$1.Input }],
            handleWindowResize: [{ type: core$1.Input }],
            windowResizeDelay: [{ type: core$1.Input }],
            eventLimit: [{ type: core$1.Input }],
            eventLimitClick: [{ type: core$1.Input }],
            timeZone: [{ type: core$1.Input }],
            now: [{ type: core$1.Input }],
            defaultView: [{ type: core$1.Input }],
            allDaySlot: [{ type: core$1.Input }],
            allDayText: [{ type: core$1.Input }],
            slotDuration: [{ type: core$1.Input }],
            slotLabelFormat: [{ type: core$1.Input }],
            slotLabelInterval: [{ type: core$1.Input }],
            snapDuration: [{ type: core$1.Input }],
            scrollTime: [{ type: core$1.Input }],
            minTime: [{ type: core$1.Input }],
            maxTime: [{ type: core$1.Input }],
            slotEventOverlap: [{ type: core$1.Input }],
            listDayFormat: [{ type: core$1.Input }],
            listDayAltFormat: [{ type: core$1.Input }],
            noEventsMessage: [{ type: core$1.Input }],
            defaultDate: [{ type: core$1.Input }],
            nowIndicator: [{ type: core$1.Input }],
            visibleRange: [{ type: core$1.Input }],
            validRange: [{ type: core$1.Input }],
            dateIncrement: [{ type: core$1.Input }],
            dateAlignment: [{ type: core$1.Input }],
            duration: [{ type: core$1.Input }],
            dayCount: [{ type: core$1.Input }],
            locales: [{ type: core$1.Input }],
            locale: [{ type: core$1.Input }],
            eventTimeFormat: [{ type: core$1.Input }],
            columnHeader: [{ type: core$1.Input }],
            columnHeaderFormat: [{ type: core$1.Input }],
            columnHeaderText: [{ type: core$1.Input }],
            columnHeaderHtml: [{ type: core$1.Input }],
            titleFormat: [{ type: core$1.Input }],
            weekLabel: [{ type: core$1.Input }],
            displayEventTime: [{ type: core$1.Input }],
            displayEventEnd: [{ type: core$1.Input }],
            eventLimitText: [{ type: core$1.Input }],
            dayPopoverFormat: [{ type: core$1.Input }],
            navLinks: [{ type: core$1.Input }],
            navLinkDayClick: [{ type: core$1.Input }],
            navLinkWeekClick: [{ type: core$1.Input }],
            selectable: [{ type: core$1.Input }],
            selectMirror: [{ type: core$1.Input }],
            unselectAuto: [{ type: core$1.Input }],
            unselectCancel: [{ type: core$1.Input }],
            defaultAllDayEventDuration: [{ type: core$1.Input }],
            defaultTimedEventDuration: [{ type: core$1.Input }],
            cmdFormatter: [{ type: core$1.Input }],
            defaultRangeSeparator: [{ type: core$1.Input }],
            selectConstraint: [{ type: core$1.Input }],
            selectOverlap: [{ type: core$1.Input }],
            selectAllow: [{ type: core$1.Input }],
            selectMinDistance: [{ type: core$1.Input }],
            editable: [{ type: core$1.Input }],
            eventStartEditable: [{ type: core$1.Input }],
            eventDurationEditable: [{ type: core$1.Input }],
            eventConstraint: [{ type: core$1.Input }],
            eventOverlap: [{ type: core$1.Input }],
            eventAllow: [{ type: core$1.Input }],
            eventClassName: [{ type: core$1.Input }],
            eventClassNames: [{ type: core$1.Input }],
            eventBackgroundColor: [{ type: core$1.Input }],
            eventBorderColor: [{ type: core$1.Input }],
            eventTextColor: [{ type: core$1.Input }],
            eventColor: [{ type: core$1.Input }],
            events: [{ type: core$1.Input }],
            eventSources: [{ type: core$1.Input }],
            allDayDefault: [{ type: core$1.Input }],
            startParam: [{ type: core$1.Input }],
            endParam: [{ type: core$1.Input }],
            lazyFetching: [{ type: core$1.Input }],
            nextDayThreshold: [{ type: core$1.Input }],
            eventOrder: [{ type: core$1.Input }],
            rerenderDelay: [{ type: core$1.Input }],
            dragRevertDuration: [{ type: core$1.Input }],
            dragScroll: [{ type: core$1.Input }],
            longPressDelay: [{ type: core$1.Input }],
            eventLongPressDelay: [{ type: core$1.Input }],
            droppable: [{ type: core$1.Input }],
            dropAccept: [{ type: core$1.Input }],
            eventDataTransform: [{ type: core$1.Input }],
            allDayMaintainDuration: [{ type: core$1.Input }],
            eventResizableFromStart: [{ type: core$1.Input }],
            timeGridEventMinHeight: [{ type: core$1.Input }],
            allDayHtml: [{ type: core$1.Input }],
            eventDragMinDistance: [{ type: core$1.Input }],
            eventSourceFailure: [{ type: core$1.Input }],
            eventSourceSuccess: [{ type: core$1.Input }],
            forceEventDuration: [{ type: core$1.Input }],
            progressiveEventRendering: [{ type: core$1.Input }],
            selectLongPressDelay: [{ type: core$1.Input }],
            timeZoneParam: [{ type: core$1.Input }],
            titleRangeSeparator: [{ type: core$1.Input }],
            buttonText: [{ type: core$1.Input }],
            views: [{ type: core$1.Input }],
            plugins: [{ type: core$1.Input }],
            schedulerLicenseKey: [{ type: core$1.Input }],
            resources: [{ type: core$1.Input }],
            resourceLabelText: [{ type: core$1.Input }],
            resourceOrder: [{ type: core$1.Input }],
            filterResourcesWithEvents: [{ type: core$1.Input }],
            resourceText: [{ type: core$1.Input }],
            resourceGroupField: [{ type: core$1.Input }],
            resourceGroupText: [{ type: core$1.Input }],
            resourceAreaWidth: [{ type: core$1.Input }],
            resourceColumns: [{ type: core$1.Input }],
            resourcesInitiallyExpanded: [{ type: core$1.Input }],
            slotWidth: [{ type: core$1.Input }],
            datesAboveResources: [{ type: core$1.Input }],
            googleCalendarApiKey: [{ type: core$1.Input }],
            refetchResourcesOnNavigate: [{ type: core$1.Input }],
            eventResourceEditable: [{ type: core$1.Input }],
            windowResize: [{ type: core$1.Output }],
            dateClick: [{ type: core$1.Output }],
            eventClick: [{ type: core$1.Output }],
            eventMouseEnter: [{ type: core$1.Output }],
            eventMouseLeave: [{ type: core$1.Output }],
            select: [{ type: core$1.Output }],
            unselect: [{ type: core$1.Output }],
            loading: [{ type: core$1.Output }],
            eventPositioned: [{ type: core$1.Output }],
            eventDragStart: [{ type: core$1.Output }],
            eventDragStop: [{ type: core$1.Output }],
            eventDrop: [{ type: core$1.Output }],
            eventResizeStart: [{ type: core$1.Output }],
            eventResizeStop: [{ type: core$1.Output }],
            eventResize: [{ type: core$1.Output }],
            drop: [{ type: core$1.Output }],
            eventReceive: [{ type: core$1.Output }],
            eventLeave: [{ type: core$1.Output }],
            _destroyed: [{ type: core$1.Output }],
            viewSkeletonRender: [{ type: core$1.Output }],
            viewSkeletonDestroy: [{ type: core$1.Output }],
            datesRender: [{ type: core$1.Output }],
            datesDestroy: [{ type: core$1.Output }],
            dayRender: [{ type: core$1.Output }],
            eventRender: [{ type: core$1.Output }],
            eventDestroy: [{ type: core$1.Output }],
            resourceRender: [{ type: core$1.Output }]
        };
        return FullCalendarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FullCalendarModule = /** @class */ (function () {
        function FullCalendarModule() {
        }
        FullCalendarModule.decorators = [
            { type: core$1.NgModule, args: [{
                        declarations: [FullCalendarComponent],
                        imports: [],
                        exports: [FullCalendarComponent]
                    },] }
        ];
        return FullCalendarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FullCalendarComponent = FullCalendarComponent;
    exports.FullCalendarModule = FullCalendarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=fullcalendar-angular.umd.js.map