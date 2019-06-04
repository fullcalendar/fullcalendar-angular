/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import deepEqual from 'fast-deep-equal';
import { deepCopy } from './utils';
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { INPUT_NAMES, INPUT_IS_DEEP, OUTPUT_NAMES } from './fullcalendar-options';
var FullCalendarComponent = /** @class */ (function () {
    function FullCalendarComponent(element) {
        this.element = element;
        this.dirtyProps = {};
        this.deepCopies = {}; // holds frozen states
        this.windowResize = new EventEmitter();
        this.dateClick = new EventEmitter();
        this.eventClick = new EventEmitter();
        this.eventMouseEnter = new EventEmitter();
        this.eventMouseLeave = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.loading = new EventEmitter();
        this.eventPositioned = new EventEmitter();
        this.eventDragStart = new EventEmitter();
        this.eventDragStop = new EventEmitter();
        this.eventDrop = new EventEmitter();
        this.eventResizeStart = new EventEmitter();
        this.eventResizeStop = new EventEmitter();
        this.eventResize = new EventEmitter();
        this.drop = new EventEmitter();
        this.eventReceive = new EventEmitter();
        this.eventLeave = new EventEmitter();
        this._destroyed = new EventEmitter();
        // TODO: make these inputs...
        this.viewSkeletonRender = new EventEmitter();
        this.viewSkeletonDestroy = new EventEmitter();
        this.datesRender = new EventEmitter();
        this.datesDestroy = new EventEmitter();
        this.dayRender = new EventEmitter();
        this.eventRender = new EventEmitter();
        this.eventDestroy = new EventEmitter();
        this.resourceRender = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.calendar = new Calendar(this.element.nativeElement, this.buildOptions());
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
        OUTPUT_NAMES.forEach((/**
         * @param {?} outputName
         * @return {?}
         */
        function (outputName) {
            options[outputName] = (/**
             * @param {...?} args
             * @return {?}
             */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a;
                (_a = _this[outputName]).emit.apply(_a, tslib_1.__spread(args));
            });
        }));
        // do after outputs, so that inputs with same name override
        INPUT_NAMES.forEach((/**
         * @param {?} inputName
         * @return {?}
         */
        function (inputName) {
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
        { type: Component, args: [{
                    selector: 'full-calendar',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    FullCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    FullCalendarComponent.propDecorators = {
        deepChangeDetection: [{ type: Input }],
        header: [{ type: Input }],
        footer: [{ type: Input }],
        customButtons: [{ type: Input }],
        buttonIcons: [{ type: Input }],
        themeSystem: [{ type: Input }],
        bootstrapFontAwesome: [{ type: Input }],
        firstDay: [{ type: Input }],
        dir: [{ type: Input }],
        weekends: [{ type: Input }],
        hiddenDays: [{ type: Input }],
        fixedWeekCount: [{ type: Input }],
        weekNumbers: [{ type: Input }],
        weekNumbersWithinDays: [{ type: Input }],
        weekNumberCalculation: [{ type: Input }],
        businessHours: [{ type: Input }],
        showNonCurrentDates: [{ type: Input }],
        height: [{ type: Input }],
        contentHeight: [{ type: Input }],
        aspectRatio: [{ type: Input }],
        handleWindowResize: [{ type: Input }],
        windowResizeDelay: [{ type: Input }],
        eventLimit: [{ type: Input }],
        eventLimitClick: [{ type: Input }],
        timeZone: [{ type: Input }],
        now: [{ type: Input }],
        defaultView: [{ type: Input }],
        allDaySlot: [{ type: Input }],
        allDayText: [{ type: Input }],
        slotDuration: [{ type: Input }],
        slotLabelFormat: [{ type: Input }],
        slotLabelInterval: [{ type: Input }],
        snapDuration: [{ type: Input }],
        scrollTime: [{ type: Input }],
        minTime: [{ type: Input }],
        maxTime: [{ type: Input }],
        slotEventOverlap: [{ type: Input }],
        listDayFormat: [{ type: Input }],
        listDayAltFormat: [{ type: Input }],
        noEventsMessage: [{ type: Input }],
        defaultDate: [{ type: Input }],
        nowIndicator: [{ type: Input }],
        visibleRange: [{ type: Input }],
        validRange: [{ type: Input }],
        dateIncrement: [{ type: Input }],
        dateAlignment: [{ type: Input }],
        duration: [{ type: Input }],
        dayCount: [{ type: Input }],
        locales: [{ type: Input }],
        locale: [{ type: Input }],
        eventTimeFormat: [{ type: Input }],
        columnHeader: [{ type: Input }],
        columnHeaderFormat: [{ type: Input }],
        columnHeaderText: [{ type: Input }],
        columnHeaderHtml: [{ type: Input }],
        titleFormat: [{ type: Input }],
        weekLabel: [{ type: Input }],
        displayEventTime: [{ type: Input }],
        displayEventEnd: [{ type: Input }],
        eventLimitText: [{ type: Input }],
        dayPopoverFormat: [{ type: Input }],
        navLinks: [{ type: Input }],
        navLinkDayClick: [{ type: Input }],
        navLinkWeekClick: [{ type: Input }],
        selectable: [{ type: Input }],
        selectMirror: [{ type: Input }],
        unselectAuto: [{ type: Input }],
        unselectCancel: [{ type: Input }],
        defaultAllDayEventDuration: [{ type: Input }],
        defaultTimedEventDuration: [{ type: Input }],
        cmdFormatter: [{ type: Input }],
        defaultRangeSeparator: [{ type: Input }],
        selectConstraint: [{ type: Input }],
        selectOverlap: [{ type: Input }],
        selectAllow: [{ type: Input }],
        selectMinDistance: [{ type: Input }],
        editable: [{ type: Input }],
        eventStartEditable: [{ type: Input }],
        eventDurationEditable: [{ type: Input }],
        eventConstraint: [{ type: Input }],
        eventOverlap: [{ type: Input }],
        eventAllow: [{ type: Input }],
        eventClassName: [{ type: Input }],
        eventClassNames: [{ type: Input }],
        eventBackgroundColor: [{ type: Input }],
        eventBorderColor: [{ type: Input }],
        eventTextColor: [{ type: Input }],
        eventColor: [{ type: Input }],
        events: [{ type: Input }],
        eventSources: [{ type: Input }],
        allDayDefault: [{ type: Input }],
        startParam: [{ type: Input }],
        endParam: [{ type: Input }],
        lazyFetching: [{ type: Input }],
        nextDayThreshold: [{ type: Input }],
        eventOrder: [{ type: Input }],
        rerenderDelay: [{ type: Input }],
        dragRevertDuration: [{ type: Input }],
        dragScroll: [{ type: Input }],
        longPressDelay: [{ type: Input }],
        eventLongPressDelay: [{ type: Input }],
        droppable: [{ type: Input }],
        dropAccept: [{ type: Input }],
        eventDataTransform: [{ type: Input }],
        allDayMaintainDuration: [{ type: Input }],
        eventResizableFromStart: [{ type: Input }],
        timeGridEventMinHeight: [{ type: Input }],
        allDayHtml: [{ type: Input }],
        eventDragMinDistance: [{ type: Input }],
        eventSourceFailure: [{ type: Input }],
        eventSourceSuccess: [{ type: Input }],
        forceEventDuration: [{ type: Input }],
        progressiveEventRendering: [{ type: Input }],
        selectLongPressDelay: [{ type: Input }],
        timeZoneParam: [{ type: Input }],
        titleRangeSeparator: [{ type: Input }],
        buttonText: [{ type: Input }],
        views: [{ type: Input }],
        plugins: [{ type: Input }],
        schedulerLicenseKey: [{ type: Input }],
        resources: [{ type: Input }],
        resourceLabelText: [{ type: Input }],
        resourceOrder: [{ type: Input }],
        filterResourcesWithEvents: [{ type: Input }],
        resourceText: [{ type: Input }],
        resourceGroupField: [{ type: Input }],
        resourceGroupText: [{ type: Input }],
        resourceAreaWidth: [{ type: Input }],
        resourceColumns: [{ type: Input }],
        resourcesInitiallyExpanded: [{ type: Input }],
        slotWidth: [{ type: Input }],
        datesAboveResources: [{ type: Input }],
        googleCalendarApiKey: [{ type: Input }],
        refetchResourcesOnNavigate: [{ type: Input }],
        eventResourceEditable: [{ type: Input }],
        windowResize: [{ type: Output }],
        dateClick: [{ type: Output }],
        eventClick: [{ type: Output }],
        eventMouseEnter: [{ type: Output }],
        eventMouseLeave: [{ type: Output }],
        select: [{ type: Output }],
        unselect: [{ type: Output }],
        loading: [{ type: Output }],
        eventPositioned: [{ type: Output }],
        eventDragStart: [{ type: Output }],
        eventDragStop: [{ type: Output }],
        eventDrop: [{ type: Output }],
        eventResizeStart: [{ type: Output }],
        eventResizeStop: [{ type: Output }],
        eventResize: [{ type: Output }],
        drop: [{ type: Output }],
        eventReceive: [{ type: Output }],
        eventLeave: [{ type: Output }],
        _destroyed: [{ type: Output }],
        viewSkeletonRender: [{ type: Output }],
        viewSkeletonDestroy: [{ type: Output }],
        datesRender: [{ type: Output }],
        datesDestroy: [{ type: Output }],
        dayRender: [{ type: Output }],
        eventRender: [{ type: Output }],
        eventDestroy: [{ type: Output }],
        resourceRender: [{ type: Output }]
    };
    return FullCalendarComponent;
}());
export { FullCalendarComponent };
if (false) {
    /** @type {?} */
    FullCalendarComponent.prototype.deepChangeDetection;
    /**
     * @type {?}
     * @private
     */
    FullCalendarComponent.prototype.calendar;
    /**
     * @type {?}
     * @private
     */
    FullCalendarComponent.prototype.dirtyProps;
    /**
     * @type {?}
     * @private
     */
    FullCalendarComponent.prototype.deepCopies;
    /** @type {?} */
    FullCalendarComponent.prototype.header;
    /** @type {?} */
    FullCalendarComponent.prototype.footer;
    /** @type {?} */
    FullCalendarComponent.prototype.customButtons;
    /** @type {?} */
    FullCalendarComponent.prototype.buttonIcons;
    /** @type {?} */
    FullCalendarComponent.prototype.themeSystem;
    /** @type {?} */
    FullCalendarComponent.prototype.bootstrapFontAwesome;
    /** @type {?} */
    FullCalendarComponent.prototype.firstDay;
    /** @type {?} */
    FullCalendarComponent.prototype.dir;
    /** @type {?} */
    FullCalendarComponent.prototype.weekends;
    /** @type {?} */
    FullCalendarComponent.prototype.hiddenDays;
    /** @type {?} */
    FullCalendarComponent.prototype.fixedWeekCount;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumbers;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumbersWithinDays;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumberCalculation;
    /** @type {?} */
    FullCalendarComponent.prototype.businessHours;
    /** @type {?} */
    FullCalendarComponent.prototype.showNonCurrentDates;
    /** @type {?} */
    FullCalendarComponent.prototype.height;
    /** @type {?} */
    FullCalendarComponent.prototype.contentHeight;
    /** @type {?} */
    FullCalendarComponent.prototype.aspectRatio;
    /** @type {?} */
    FullCalendarComponent.prototype.handleWindowResize;
    /** @type {?} */
    FullCalendarComponent.prototype.windowResizeDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimit;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimitClick;
    /** @type {?} */
    FullCalendarComponent.prototype.timeZone;
    /** @type {?} */
    FullCalendarComponent.prototype.now;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultView;
    /** @type {?} */
    FullCalendarComponent.prototype.allDaySlot;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayText;
    /** @type {?} */
    FullCalendarComponent.prototype.slotDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.slotLabelFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.slotLabelInterval;
    /** @type {?} */
    FullCalendarComponent.prototype.snapDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.scrollTime;
    /** @type {?} */
    FullCalendarComponent.prototype.minTime;
    /** @type {?} */
    FullCalendarComponent.prototype.maxTime;
    /** @type {?} */
    FullCalendarComponent.prototype.slotEventOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.listDayFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.listDayAltFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.noEventsMessage;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultDate;
    /** @type {?} */
    FullCalendarComponent.prototype.nowIndicator;
    /** @type {?} */
    FullCalendarComponent.prototype.visibleRange;
    /** @type {?} */
    FullCalendarComponent.prototype.validRange;
    /** @type {?} */
    FullCalendarComponent.prototype.dateIncrement;
    /** @type {?} */
    FullCalendarComponent.prototype.dateAlignment;
    /** @type {?} */
    FullCalendarComponent.prototype.duration;
    /** @type {?} */
    FullCalendarComponent.prototype.dayCount;
    /** @type {?} */
    FullCalendarComponent.prototype.locales;
    /** @type {?} */
    FullCalendarComponent.prototype.locale;
    /** @type {?} */
    FullCalendarComponent.prototype.eventTimeFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeader;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeaderFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeaderText;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeaderHtml;
    /** @type {?} */
    FullCalendarComponent.prototype.titleFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.weekLabel;
    /** @type {?} */
    FullCalendarComponent.prototype.displayEventTime;
    /** @type {?} */
    FullCalendarComponent.prototype.displayEventEnd;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimitText;
    /** @type {?} */
    FullCalendarComponent.prototype.dayPopoverFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinks;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinkDayClick;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinkWeekClick;
    /** @type {?} */
    FullCalendarComponent.prototype.selectable;
    /** @type {?} */
    FullCalendarComponent.prototype.selectMirror;
    /** @type {?} */
    FullCalendarComponent.prototype.unselectAuto;
    /** @type {?} */
    FullCalendarComponent.prototype.unselectCancel;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultAllDayEventDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultTimedEventDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.cmdFormatter;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultRangeSeparator;
    /** @type {?} */
    FullCalendarComponent.prototype.selectConstraint;
    /** @type {?} */
    FullCalendarComponent.prototype.selectOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.selectAllow;
    /** @type {?} */
    FullCalendarComponent.prototype.selectMinDistance;
    /** @type {?} */
    FullCalendarComponent.prototype.editable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventStartEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDurationEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventConstraint;
    /** @type {?} */
    FullCalendarComponent.prototype.eventOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.eventAllow;
    /** @type {?} */
    FullCalendarComponent.prototype.eventClassName;
    /** @type {?} */
    FullCalendarComponent.prototype.eventClassNames;
    /** @type {?} */
    FullCalendarComponent.prototype.eventBackgroundColor;
    /** @type {?} */
    FullCalendarComponent.prototype.eventBorderColor;
    /** @type {?} */
    FullCalendarComponent.prototype.eventTextColor;
    /** @type {?} */
    FullCalendarComponent.prototype.eventColor;
    /** @type {?} */
    FullCalendarComponent.prototype.events;
    /** @type {?} */
    FullCalendarComponent.prototype.eventSources;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayDefault;
    /** @type {?} */
    FullCalendarComponent.prototype.startParam;
    /** @type {?} */
    FullCalendarComponent.prototype.endParam;
    /** @type {?} */
    FullCalendarComponent.prototype.lazyFetching;
    /** @type {?} */
    FullCalendarComponent.prototype.nextDayThreshold;
    /** @type {?} */
    FullCalendarComponent.prototype.eventOrder;
    /** @type {?} */
    FullCalendarComponent.prototype.rerenderDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.dragRevertDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.dragScroll;
    /** @type {?} */
    FullCalendarComponent.prototype.longPressDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLongPressDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.droppable;
    /** @type {?} */
    FullCalendarComponent.prototype.dropAccept;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDataTransform;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayMaintainDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResizableFromStart;
    /** @type {?} */
    FullCalendarComponent.prototype.timeGridEventMinHeight;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayHtml;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDragMinDistance;
    /** @type {?} */
    FullCalendarComponent.prototype.eventSourceFailure;
    /** @type {?} */
    FullCalendarComponent.prototype.eventSourceSuccess;
    /** @type {?} */
    FullCalendarComponent.prototype.forceEventDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.progressiveEventRendering;
    /** @type {?} */
    FullCalendarComponent.prototype.selectLongPressDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.timeZoneParam;
    /** @type {?} */
    FullCalendarComponent.prototype.titleRangeSeparator;
    /** @type {?} */
    FullCalendarComponent.prototype.buttonText;
    /** @type {?} */
    FullCalendarComponent.prototype.views;
    /** @type {?} */
    FullCalendarComponent.prototype.plugins;
    /** @type {?} */
    FullCalendarComponent.prototype.schedulerLicenseKey;
    /** @type {?} */
    FullCalendarComponent.prototype.resources;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceLabelText;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceOrder;
    /** @type {?} */
    FullCalendarComponent.prototype.filterResourcesWithEvents;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceText;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceGroupField;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceGroupText;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceAreaWidth;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceColumns;
    /** @type {?} */
    FullCalendarComponent.prototype.resourcesInitiallyExpanded;
    /** @type {?} */
    FullCalendarComponent.prototype.slotWidth;
    /** @type {?} */
    FullCalendarComponent.prototype.datesAboveResources;
    /** @type {?} */
    FullCalendarComponent.prototype.googleCalendarApiKey;
    /** @type {?} */
    FullCalendarComponent.prototype.refetchResourcesOnNavigate;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResourceEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.windowResize;
    /** @type {?} */
    FullCalendarComponent.prototype.dateClick;
    /** @type {?} */
    FullCalendarComponent.prototype.eventClick;
    /** @type {?} */
    FullCalendarComponent.prototype.eventMouseEnter;
    /** @type {?} */
    FullCalendarComponent.prototype.eventMouseLeave;
    /** @type {?} */
    FullCalendarComponent.prototype.select;
    /** @type {?} */
    FullCalendarComponent.prototype.unselect;
    /** @type {?} */
    FullCalendarComponent.prototype.loading;
    /** @type {?} */
    FullCalendarComponent.prototype.eventPositioned;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDragStart;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDragStop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDrop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResizeStart;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResizeStop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResize;
    /** @type {?} */
    FullCalendarComponent.prototype.drop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventReceive;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLeave;
    /** @type {?} */
    FullCalendarComponent.prototype._destroyed;
    /** @type {?} */
    FullCalendarComponent.prototype.viewSkeletonRender;
    /** @type {?} */
    FullCalendarComponent.prototype.viewSkeletonDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.datesRender;
    /** @type {?} */
    FullCalendarComponent.prototype.datesDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.dayRender;
    /** @type {?} */
    FullCalendarComponent.prototype.eventRender;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceRender;
    /**
     * @type {?}
     * @private
     */
    FullCalendarComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmdWxsY2FsZW5kYXIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9mdWxsY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuQyxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFPYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUE0RCxNQUFNLG9CQUFvQixDQUFDO0FBb0J4RyxPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVsRjtJQVlFLCtCQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBSC9CLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFRLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQjtRQStPMUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFDLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8s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REFBdUM7O0lBQ3ZDLG1EQUE4RDs7SUFDOUQsbURBQWdFOztJQUNoRSxtREFBc0M7O0lBQ3RDLDBEQUE2Qzs7SUFDN0MscURBQXVDOztJQUN2Qyw4Q0FBZ0M7O0lBQ2hDLG9EQUFzQzs7SUFFdEMsMkNBQThDOztJQUM5QyxzQ0FBd0Q7O0lBQ3hELHdDQUEwQzs7SUFFMUMsb0RBQXNDOztJQUN0QywwQ0FBeUI7O0lBQ3pCLGtEQUFvQzs7SUFDcEMsOENBQTZCOztJQUM3QiwwREFBeUM7O0lBQ3pDLDZDQUE0Qjs7SUFDNUIsbURBQWtDOztJQUNsQyxrREFBaUM7O0lBQ2pDLGtEQUFpQzs7SUFDakMsZ0RBQStCOztJQUMvQiwyREFBMEM7O0lBQzFDLDBDQUF5Qjs7SUFDekIsb0RBQW1DOztJQUNuQyxxREFBdUM7O0lBQ3ZDLDJEQUE4Qzs7SUFDOUMsc0RBQXlDOztJQUV6Qyw2Q0FBaUQ7O0lBQ2pELDBDQUE4Qzs7SUFDOUMsMkNBQStDOztJQUMvQyxnREFBb0Q7O0lBQ3BELGdEQUFvRDs7SUFDcEQsdUNBQTJDOztJQUMzQyx5Q0FBNkM7O0lBQzdDLHdDQUE0Qzs7SUFDNUMsZ0RBQW9EOztJQUNwRCwrQ0FBbUQ7O0lBQ25ELDhDQUFrRDs7SUFDbEQsMENBQThDOztJQUM5QyxpREFBcUQ7O0lBQ3JELGdEQUFvRDs7SUFDcEQsNENBQWdEOztJQUNoRCxxQ0FBeUM7O0lBQ3pDLDZDQUFpRDs7SUFDakQsMkNBQStDOztJQUMvQywyQ0FBK0M7O0lBRS9DLG1EQUF1RDs7SUFDdkQsb0RBQXdEOztJQUN4RCw0Q0FBZ0Q7O0lBQ2hELDZDQUFpRDs7SUFDakQsMENBQThDOztJQUM5Qyw0Q0FBZ0Q7O0lBQ2hELDZDQUFpRDs7SUFDakQsK0NBQW1EOzs7OztJQXhRdkMsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0LFxuICBEb0NoZWNrLFxuICBPbkNoYW5nZXMsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyLCBCdXNpbmVzc0hvdXJzSW5wdXQsIENvbnN0cmFpbnRJbnB1dCwgRXZlbnRBcGksIFBsdWdpbkRlZiB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZSc7XG5pbXBvcnQge1xuICBUb29sYmFySW5wdXQsXG4gIEN1c3RvbUJ1dHRvbklucHV0LFxuICBCdXR0b25JY29uc0lucHV0LCBDZWxsSW5mbyxcbiAgQnV0dG9uVGV4dENvbXBvdW5kSW5wdXQsXG4gIFZpZXdPcHRpb25zSW5wdXRcbn0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL3R5cGVzL2lucHV0LXR5cGVzJztcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2Vudic7XG5pbXBvcnQgeyBEdXJhdGlvbklucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZHVyYXRpb24nO1xuaW1wb3J0IHsgRm9ybWF0dGVySW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9mb3JtYXR0aW5nJztcbmltcG9ydCB7IERhdGVSYW5nZUlucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZGF0ZS1yYW5nZSc7XG5pbXBvcnQgeyBSYXdMb2NhbGUsIExvY2FsZVNpbmd1bGFyQXJnIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvbG9jYWxlJztcbmltcG9ydCB7IE92ZXJsYXBGdW5jLCBBbGxvd0Z1bmMgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvdmFsaWRhdGlvbic7XG5pbXBvcnQge1xuICBFdmVudFNvdXJjZUlucHV0LFxuICBFdmVudElucHV0VHJhbnNmb3JtZXIsXG4gIEV2ZW50U291cmNlRXJyb3JSZXNwb25zZUhhbmRsZXIsXG4gIEV2ZW50U291cmNlU3VjY2Vzc1Jlc3BvbnNlSGFuZGxlclxufSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvc3RydWN0cy9ldmVudC1zb3VyY2UnO1xuaW1wb3J0IHsgSU5QVVRfTkFNRVMsIElOUFVUX0lTX0RFRVAsIE9VVFBVVF9OQU1FUyB9IGZyb20gJy4vZnVsbGNhbGVuZGFyLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdWxsLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBkZWVwQ2hhbmdlRGV0ZWN0aW9uPzogYm9vbGVhbjtcblxuICBwcml2YXRlIGNhbGVuZGFyOiBDYWxlbmRhcjtcbiAgcHJpdmF0ZSBkaXJ0eVByb3BzOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBkZWVwQ29waWVzOiBhbnkgPSB7fTsgLy8gaG9sZHMgZnJvemVuIHN0YXRlc1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnVpbGRPcHRpb25zKCkpO1xuICAgIHRoaXMuY2FsZW5kYXIucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkT3B0aW9ucygpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge307XG5cbiAgICBPVVRQVVRfTkFNRVMuZm9yRWFjaChvdXRwdXROYW1lID0+IHtcbiAgICAgIG9wdGlvbnNbb3V0cHV0TmFtZV0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICB0aGlzW291dHB1dE5hbWVdLmVtaXQoLi4uYXJncyk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gZG8gYWZ0ZXIgb3V0cHV0cywgc28gdGhhdCBpbnB1dHMgd2l0aCBzYW1lIG5hbWUgb3ZlcnJpZGVcbiAgICBJTlBVVF9OQU1FUy5mb3JFYWNoKGlucHV0TmFtZSA9PiB7XG4gICAgICBsZXQgaW5wdXRWYWwgPSB0aGlzW2lucHV0TmFtZV07XG5cbiAgICAgIGlmIChpbnB1dFZhbCAhPT0gdW5kZWZpbmVkKSB7IC8vIHVuZm9ydHVuYXRlbHkgRkMgY2hva2VzIHdoZW4gc29tZSBwcm9wcyBhcmUgc2V0IHRvIHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh0aGlzLmRlZXBDaGFuZ2VEZXRlY3Rpb24gJiYgSU5QVVRfSVNfREVFUFtpbnB1dE5hbWVdKSB7XG4gICAgICAgICAgaW5wdXRWYWwgPSBkZWVwQ29weShpbnB1dFZhbCk7XG4gICAgICAgICAgdGhpcy5kZWVwQ29waWVzW2lucHV0TmFtZV0gPSBpbnB1dFZhbDsgLy8gc2lkZSBlZmZlY3QhXG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zW2lucHV0TmFtZV0gPSBpbnB1dFZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLypcbiAgY2FsbGVkIGJlZm9yZSBuZ09uQ2hhbmdlcywgYWxsb3dzIHVzIHRvIG1hbnVhbGx5IGRldGVjdCBpbnB1dCBjaGFuZ2VzLlxuICBjYWxsZWQgbXVjaCBtb3JlIG9mdGVuIHRoYW4gbmdPbkNoYW5nZXMuXG4gICovXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhciAmJiB0aGlzLmRlZXBDaGFuZ2VEZXRlY3Rpb24pIHsgLy8gbm90IHRoZSBpbml0aWFsIHJlbmRlciBBTkQgd2UgZG8gZGVlcC1tdXRhdGlvbiBjaGVja3NcbiAgICAgIGNvbnN0IHsgZGVlcENvcGllcyB9ID0gdGhpcztcblxuICAgICAgZm9yIChjb25zdCBpbnB1dE5hbWUgaW4gSU5QVVRfSVNfREVFUCkge1xuICAgICAgICBpZiAoSU5QVVRfSVNfREVFUC5oYXNPd25Qcm9wZXJ0eShpbnB1dE5hbWUpKSB7XG4gICAgICAgICAgY29uc3QgaW5wdXRWYWwgPSB0aGlzW2lucHV0TmFtZV07XG5cbiAgICAgICAgICBpZiAoaW5wdXRWYWwgIT09IHVuZGVmaW5lZCkgeyAvLyB1bmZvcnR1bmF0ZWx5IEZDIGNob2tlcyB3aGVuIHNvbWUgcHJvcHMgYXJlIHNldCB0byB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmICghZGVlcEVxdWFsKGlucHV0VmFsLCBkZWVwQ29waWVzW2lucHV0TmFtZV0pKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBkZWVwQ29weShpbnB1dFZhbCk7XG4gICAgICAgICAgICAgIGRlZXBDb3BpZXNbaW5wdXROYW1lXSA9IGNvcHk7XG4gICAgICAgICAgICAgIHRoaXMuZGlydHlQcm9wc1tpbnB1dE5hbWVdID0gY29weTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICBjYWxsZWQgd2l0aCBjb25maXJtZWQgY2hhbmdlcyB0byBpbnB1dCByZWZlcmVuY2VzXG4gICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhcikgeyAvLyBub3QgdGhlIGluaXRpYWwgcmVuZGVyXG5cbiAgICAgIGZvciAoY29uc3QgaW5wdXROYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoaW5wdXROYW1lKSkge1xuICAgICAgICAgIGlmICh0aGlzLmRlZXBDb3BpZXNbaW5wdXROYW1lXSA9PT0gdW5kZWZpbmVkKSB7IC8vIG5vdCBhbHJlYWR5IGhhbmRsZWQgaW4gbmdEb0NoZWNrXG4gICAgICAgICAgICB0aGlzLmRpcnR5UHJvcHNbaW5wdXROYW1lXSA9IGNoYW5nZXNbaW5wdXROYW1lXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGNvbnN0IHsgZGlydHlQcm9wcyB9ID0gdGhpczsgLy8gaG9sZCBvbiB0byByZWZlcmVuY2UgYmVmb3JlIGNsZWFyaW5nXG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZGlydHlQcm9wcykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307IC8vIGNsZWFyIGZpcnN0LCBpbiBjYXNlIHRoZSByZXJlbmRlciBjYXVzZXMgbmV3IGRpcnRpbmVzc1xuICAgICAgdGhpcy5jYWxlbmRhci5tdXRhdGVPcHRpb25zKGRpcnR5UHJvcHMsIFtdLCBmYWxzZSwgZGVlcEVxdWFsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNhbGVuZGFyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNhbGVuZGFyID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBcGkoKTogQ2FsZW5kYXIge1xuICAgIHJldHVybiB0aGlzLmNhbGVuZGFyO1xuICB9XG5cbiAgLypcbiAgVE9ETzogdGhlIGZvbGxvd2luZyBJbnB1dHMvT3V0cHV0cyBzaG91bGQgYmUgYXV0b21hdGljYWxseSByZXdyaXR0ZW4gZm9yIGVhY2ggdmVyc2lvbiBidW1wXG4gIG9mIHRoZSBjb3JlIHByb2plY3QuIEEgc2NyaXB0IHdpbGwgYmUgd3JpdHRlbiB0byBvdmVyd3JpdGUgdGhlIGFjdHVhbHkgc291cmNlIGNvZGUgaGVyZS5cbiAgSXQgaXMgdXN1YWxseSBnb29kIHRvIHB1dCBhIGNsYXNzJ3MgcHJvcGVydHkgZGVjbGFyYXRpb25zIEJFRk9SRSB0aGUgbWV0aG9kcywgYnV0IGluIHRoaXMgY2FzZSxcbiAgc2luY2UgdGhlIHByb3BlcnRpZXMgd2lsbCBiZSBwcm9ncmFtbWF0aWNhbGx5IGdlbmVyYXRlZCwgYmV0dGVyIHRvIHB1dCB0aGVtIGFmdGVyLlxuICAqL1xuXG4gIEBJbnB1dCgpIGhlYWRlcj86IGJvb2xlYW4gfCBUb29sYmFySW5wdXQ7XG4gIEBJbnB1dCgpIGZvb3Rlcj86IGJvb2xlYW4gfCBUb29sYmFySW5wdXQ7XG4gIEBJbnB1dCgpIGN1c3RvbUJ1dHRvbnM/OiB7IFtuYW1lOiBzdHJpbmddOiBDdXN0b21CdXR0b25JbnB1dCB9O1xuICBASW5wdXQoKSBidXR0b25JY29ucz86IGJvb2xlYW4gfCBCdXR0b25JY29uc0lucHV0O1xuICBASW5wdXQoKSB0aGVtZVN5c3RlbT86ICdzdGFuZGFyZCcgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGJvb3RzdHJhcEZvbnRBd2Vzb21lPzogYm9vbGVhbiB8IEJ1dHRvbkljb25zSW5wdXQ7XG4gIEBJbnB1dCgpIGZpcnN0RGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBkaXI/OiAnbHRyJyB8ICdydGwnIHwgJ2F1dG8nO1xuICBASW5wdXQoKSB3ZWVrZW5kcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhpZGRlbkRheXM/OiBudW1iZXJbXTtcbiAgQElucHV0KCkgZml4ZWRXZWVrQ291bnQ/OiBib29sZWFuO1xuICBASW5wdXQoKSB3ZWVrTnVtYmVycz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJzV2l0aGluRGF5cz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJDYWxjdWxhdGlvbj86ICdsb2NhbCcgfCAnSVNPJyB8ICgobTogRGF0ZSkgPT4gbnVtYmVyKTtcbiAgQElucHV0KCkgYnVzaW5lc3NIb3Vycz86IEJ1c2luZXNzSG91cnNJbnB1dDtcbiAgQElucHV0KCkgc2hvd05vbkN1cnJlbnREYXRlcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhlaWdodD86IG51bWJlciB8ICdhdXRvJyB8ICdwYXJlbnQnIHwgKCgpID0+IG51bWJlcik7XG4gIEBJbnB1dCgpIGNvbnRlbnRIZWlnaHQ/OiBudW1iZXIgfCAnYXV0bycgfCAoKCkgPT4gbnVtYmVyKTtcbiAgQElucHV0KCkgYXNwZWN0UmF0aW8/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGhhbmRsZVdpbmRvd1Jlc2l6ZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdpbmRvd1Jlc2l6ZURlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBldmVudExpbWl0PzogYm9vbGVhbiB8IG51bWJlcjtcbiAgQElucHV0KCkgZXZlbnRMaW1pdENsaWNrPzogJ3BvcG92ZXInIHwgJ3dlZWsnIHwgJ2RheScgfCBzdHJpbmcgfCAoKGNlbGxpbmZvOiBDZWxsSW5mbywganNldmVudDogRXZlbnQpID0+IHZvaWQpO1xuICBASW5wdXQoKSB0aW1lWm9uZT86IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vdz86IERhdGVJbnB1dCB8ICgoKSA9PiBEYXRlSW5wdXQpO1xuICBASW5wdXQoKSBkZWZhdWx0Vmlldz86IHN0cmluZztcbiAgQElucHV0KCkgYWxsRGF5U2xvdD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFsbERheVRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNsb3REdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIHNsb3RMYWJlbEZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSBzbG90TGFiZWxJbnRlcnZhbD86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIHNuYXBEdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIHNjcm9sbFRpbWU/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBtaW5UaW1lPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgbWF4VGltZT86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIHNsb3RFdmVudE92ZXJsYXA/OiBib29sZWFuO1xuICBASW5wdXQoKSBsaXN0RGF5Rm9ybWF0PzogRm9ybWF0dGVySW5wdXQgfCBib29sZWFuO1xuICBASW5wdXQoKSBsaXN0RGF5QWx0Rm9ybWF0PzogRm9ybWF0dGVySW5wdXQgfCBib29sZWFuO1xuICBASW5wdXQoKSBub0V2ZW50c01lc3NhZ2U/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHREYXRlPzogRGF0ZUlucHV0O1xuICBASW5wdXQoKSBub3dJbmRpY2F0b3I/OiBib29sZWFuO1xuICBASW5wdXQoKSB2aXNpYmxlUmFuZ2U/OiAoKGN1cnJlbnREYXRlOiBEYXRlKSA9PiBEYXRlUmFuZ2VJbnB1dCkgfCBEYXRlUmFuZ2VJbnB1dDtcbiAgQElucHV0KCkgdmFsaWRSYW5nZT86IERhdGVSYW5nZUlucHV0O1xuICBASW5wdXQoKSBkYXRlSW5jcmVtZW50PzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgZGF0ZUFsaWdubWVudD86IHN0cmluZztcbiAgQElucHV0KCkgZHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBkYXlDb3VudD86IG51bWJlcjtcbiAgQElucHV0KCkgbG9jYWxlcz86IFJhd0xvY2FsZVtdO1xuICBASW5wdXQoKSBsb2NhbGU/OiBMb2NhbGVTaW5ndWxhckFyZztcbiAgQElucHV0KCkgZXZlbnRUaW1lRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlckZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSBjb2x1bW5IZWFkZXJUZXh0Pzogc3RyaW5nIHwgKChkYXRlOiBEYXRlSW5wdXQpID0+IHN0cmluZyk7XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlckh0bWw/OiBzdHJpbmcgfCAoKGRhdGU6IERhdGVJbnB1dCkgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgdGl0bGVGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgd2Vla0xhYmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNwbGF5RXZlbnRUaW1lPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzcGxheUV2ZW50RW5kPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRMaW1pdFRleHQ/OiBzdHJpbmcgfCAoKGV2ZW50Q250OiBudW1iZXIpID0+IHN0cmluZyk7XG4gIEBJbnB1dCgpIGRheVBvcG92ZXJGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgbmF2TGlua3M/OiBib29sZWFuO1xuICBASW5wdXQoKSBuYXZMaW5rRGF5Q2xpY2s/OiBzdHJpbmcgfCAoKGRhdGU6IERhdGUsIGpzRXZlbnQ6IEV2ZW50KSA9PiB2b2lkKTtcbiAgQElucHV0KCkgbmF2TGlua1dlZWtDbGljaz86IHN0cmluZyB8ICgod2Vla1N0YXJ0OiBhbnksIGpzRXZlbnQ6IEV2ZW50KSA9PiB2b2lkKTtcbiAgQElucHV0KCkgc2VsZWN0YWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdE1pcnJvcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHVuc2VsZWN0QXV0bz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHVuc2VsZWN0Q2FuY2VsPzogc3RyaW5nO1xuICBASW5wdXQoKSBkZWZhdWx0QWxsRGF5RXZlbnREdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGRlZmF1bHRUaW1lZEV2ZW50RHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBjbWRGb3JtYXR0ZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHRSYW5nZVNlcGFyYXRvcj86IHN0cmluZztcbiAgQElucHV0KCkgc2VsZWN0Q29uc3RyYWludD86IENvbnN0cmFpbnRJbnB1dDtcbiAgQElucHV0KCkgc2VsZWN0T3ZlcmxhcD86IGJvb2xlYW4gfCBPdmVybGFwRnVuYztcbiAgQElucHV0KCkgc2VsZWN0QWxsb3c/OiBBbGxvd0Z1bmM7XG4gIEBJbnB1dCgpIHNlbGVjdE1pbkRpc3RhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKSBlZGl0YWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50U3RhcnRFZGl0YWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50RHVyYXRpb25FZGl0YWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50Q29uc3RyYWludD86IENvbnN0cmFpbnRJbnB1dDtcbiAgQElucHV0KCkgZXZlbnRPdmVybGFwPzogYm9vbGVhbiB8IE92ZXJsYXBGdW5jO1xuICBASW5wdXQoKSBldmVudEFsbG93PzogQWxsb3dGdW5jO1xuICBASW5wdXQoKSBldmVudENsYXNzTmFtZT86IHN0cmluZ1tdIHwgc3RyaW5nO1xuICBASW5wdXQoKSBldmVudENsYXNzTmFtZXM/OiBzdHJpbmdbXSB8IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRCYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50Qm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50VGV4dENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudHM/OiBFdmVudFNvdXJjZUlucHV0O1xuICBASW5wdXQoKSBldmVudFNvdXJjZXM/OiBFdmVudFNvdXJjZUlucHV0W107XG4gIEBJbnB1dCgpIGFsbERheURlZmF1bHQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBzdGFydFBhcmFtPzogc3RyaW5nO1xuICBASW5wdXQoKSBlbmRQYXJhbT86IHN0cmluZztcbiAgQElucHV0KCkgbGF6eUZldGNoaW5nPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbmV4dERheVRocmVzaG9sZD86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGV2ZW50T3JkZXI/OiBzdHJpbmcgfCBBcnJheTwoKGE6IEV2ZW50QXBpLCBiOiBFdmVudEFwaSkgPT4gbnVtYmVyKSB8IChzdHJpbmcgfCAoKGE6IEV2ZW50QXBpLCBiOiBFdmVudEFwaSkgPT4gbnVtYmVyKSk+O1xuICBASW5wdXQoKSByZXJlbmRlckRlbGF5PzogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgZHJhZ1JldmVydER1cmF0aW9uPzogbnVtYmVyO1xuICBASW5wdXQoKSBkcmFnU2Nyb2xsPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbG9uZ1ByZXNzRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGV2ZW50TG9uZ1ByZXNzRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyb3BwYWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRyb3BBY2NlcHQ/OiBzdHJpbmcgfCAoKGRyYWdnYWJsZTogYW55KSA9PiBib29sZWFuKTtcbiAgQElucHV0KCkgZXZlbnREYXRhVHJhbnNmb3JtPzogRXZlbnRJbnB1dFRyYW5zZm9ybWVyO1xuICBASW5wdXQoKSBhbGxEYXlNYWludGFpbkR1cmF0aW9uPzogQm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRSZXNpemFibGVGcm9tU3RhcnQ/OiBCb29sZWFuO1xuICBASW5wdXQoKSB0aW1lR3JpZEV2ZW50TWluSGVpZ2h0PzogbnVtYmVyO1xuICBASW5wdXQoKSBhbGxEYXlIdG1sPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudERyYWdNaW5EaXN0YW5jZT86IG51bWJlcjtcbiAgQElucHV0KCkgZXZlbnRTb3VyY2VGYWlsdXJlPzogRXZlbnRTb3VyY2VFcnJvclJlc3BvbnNlSGFuZGxlcjtcbiAgQElucHV0KCkgZXZlbnRTb3VyY2VTdWNjZXNzPzogRXZlbnRTb3VyY2VTdWNjZXNzUmVzcG9uc2VIYW5kbGVyO1xuICBASW5wdXQoKSBmb3JjZUV2ZW50RHVyYXRpb24/OiBib29sZWFuO1xuICBASW5wdXQoKSBwcm9ncmVzc2l2ZUV2ZW50UmVuZGVyaW5nPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0TG9uZ1ByZXNzRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIHRpbWVab25lUGFyYW0/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlUmFuZ2VTZXBhcmF0b3I/OiBzdHJpbmc7XG4gIC8vIGNvbXBvdW5kIE9wdGlvbnNJbnB1dC4uLlxuICBASW5wdXQoKSBidXR0b25UZXh0PzogQnV0dG9uVGV4dENvbXBvdW5kSW5wdXQ7XG4gIEBJbnB1dCgpIHZpZXdzPzogeyBbdmlld0lkOiBzdHJpbmddOiBWaWV3T3B0aW9uc0lucHV0IH07XG4gIEBJbnB1dCgpIHBsdWdpbnM/OiAoUGx1Z2luRGVmIHwgc3RyaW5nKVtdO1xuICAvLyBzY2hlZHVsZXIuLi5cbiAgQElucHV0KCkgc2NoZWR1bGVyTGljZW5zZUtleT86IHN0cmluZztcbiAgQElucHV0KCkgcmVzb3VyY2VzPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUxhYmVsVGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgcmVzb3VyY2VPcmRlcj86IGFueTtcbiAgQElucHV0KCkgZmlsdGVyUmVzb3VyY2VzV2l0aEV2ZW50cz86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VUZXh0PzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUdyb3VwRmllbGQ/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlR3JvdXBUZXh0PzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUFyZWFXaWR0aD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VDb2x1bW5zPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZXNJbml0aWFsbHlFeHBhbmRlZD86IGFueTtcbiAgQElucHV0KCkgc2xvdFdpZHRoPzogYW55O1xuICBASW5wdXQoKSBkYXRlc0Fib3ZlUmVzb3VyY2VzPzogYW55O1xuICBASW5wdXQoKSBnb29nbGVDYWxlbmRhckFwaUtleT86IHN0cmluZztcbiAgQElucHV0KCkgcmVmZXRjaFJlc291cmNlc09uTmF2aWdhdGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudFJlc291cmNlRWRpdGFibGU/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSB3aW5kb3dSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRhdGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRNb3VzZUVudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudE1vdXNlTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgdW5zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGxvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UG9zaXRpb25lZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50RHJhZ1N0b3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50RHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZXNpemVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZXNpemVTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZWNlaXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudExlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBfZGVzdHJveWVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIFRPRE86IG1ha2UgdGhlc2UgaW5wdXRzLi4uXG4gIEBPdXRwdXQoKSB2aWV3U2tlbGV0b25SZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHZpZXdTa2VsZXRvbkRlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRhdGVzUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkYXRlc0Rlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRheVJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50RGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcmVzb3VyY2VSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbn1cbiJdfQ==