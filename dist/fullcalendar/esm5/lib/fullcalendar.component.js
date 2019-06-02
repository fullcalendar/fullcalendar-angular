/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import deepEqual from 'fast-deep-equal';
import { default as deepCopy } from 'deep-copy';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmdWxsY2FsZW5kYXIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9mdWxsY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEMsT0FBTyxFQUFFLE9BQU8sSUFBSSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDaEQsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBT2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBNEQsTUFBTSxvQkFBb0IsQ0FBQztBQW9CeEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEY7SUFZRSwrQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUgvQixlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLGVBQVUsR0FBUSxFQUFFLENBQUMsQ0FBQyxzQkFBc0I7UUErTzFDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxtQkFBYyxHQUFHLElBQUks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Qjs7SUFDN0IscURBQXVDOztJQUN2QyxtREFBOEQ7O0lBQzlELG1EQUFnRTs7SUFDaEUsbURBQXNDOztJQUN0QywwREFBNkM7O0lBQzdDLHFEQUF1Qzs7SUFDdkMsOENBQWdDOztJQUNoQyxvREFBc0M7O0lBRXRDLDJDQUE4Qzs7SUFDOUMsc0NBQXdEOztJQUN4RCx3Q0FBMEM7O0lBRTFDLG9EQUFzQzs7SUFDdEMsMENBQXlCOztJQUN6QixrREFBb0M7O0lBQ3BDLDhDQUE2Qjs7SUFDN0IsMERBQXlDOztJQUN6Qyw2Q0FBNEI7O0lBQzVCLG1EQUFrQzs7SUFDbEMsa0RBQWlDOztJQUNqQyxrREFBaUM7O0lBQ2pDLGdEQUErQjs7SUFDL0IsMkRBQTBDOztJQUMxQywwQ0FBeUI7O0lBQ3pCLG9EQUFtQzs7SUFDbkMscURBQXVDOztJQUN2QywyREFBOEM7O0lBQzlDLHNEQUF5Qzs7SUFFekMsNkNBQWlEOztJQUNqRCwwQ0FBOEM7O0lBQzlDLDJDQUErQzs7SUFDL0MsZ0RBQW9EOztJQUNwRCxnREFBb0Q7O0lBQ3BELHVDQUEyQzs7SUFDM0MseUNBQTZDOztJQUM3Qyx3Q0FBNEM7O0lBQzVDLGdEQUFvRDs7SUFDcEQsK0NBQW1EOztJQUNuRCw4Q0FBa0Q7O0lBQ2xELDBDQUE4Qzs7SUFDOUMsaURBQXFEOztJQUNyRCxnREFBb0Q7O0lBQ3BELDRDQUFnRDs7SUFDaEQscUNBQXlDOztJQUN6Qyw2Q0FBaUQ7O0lBQ2pELDJDQUErQzs7SUFDL0MsMkNBQStDOztJQUUvQyxtREFBdUQ7O0lBQ3ZELG9EQUF3RDs7SUFDeEQsNENBQWdEOztJQUNoRCw2Q0FBaUQ7O0lBQ2pELDBDQUE4Qzs7SUFDOUMsNENBQWdEOztJQUNoRCw2Q0FBaUQ7O0lBQ2pELCtDQUFtRDs7Ozs7SUF4UXZDLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWVwRXF1YWwgZnJvbSAnZmFzdC1kZWVwLWVxdWFsJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGVlcENvcHkgfSBmcm9tICdkZWVwLWNvcHknO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEFmdGVyVmlld0luaXQsXG4gIERvQ2hlY2ssXG4gIE9uQ2hhbmdlcyxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXIsIEJ1c2luZXNzSG91cnNJbnB1dCwgQ29uc3RyYWludElucHV0LCBFdmVudEFwaSwgUGx1Z2luRGVmIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlJztcbmltcG9ydCB7XG4gIFRvb2xiYXJJbnB1dCxcbiAgQ3VzdG9tQnV0dG9uSW5wdXQsXG4gIEJ1dHRvbkljb25zSW5wdXQsIENlbGxJbmZvLFxuICBCdXR0b25UZXh0Q29tcG91bmRJbnB1dCxcbiAgVmlld09wdGlvbnNJbnB1dFxufSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvdHlwZXMvaW5wdXQtdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZW52JztcbmltcG9ydCB7IER1cmF0aW9uSW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9kdXJhdGlvbic7XG5pbXBvcnQgeyBGb3JtYXR0ZXJJbnB1dCB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2Zvcm1hdHRpbmcnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlSW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9kYXRlLXJhbmdlJztcbmltcG9ydCB7IFJhd0xvY2FsZSwgTG9jYWxlU2luZ3VsYXJBcmcgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9sb2NhbGUnO1xuaW1wb3J0IHsgT3ZlcmxhcEZ1bmMsIEFsbG93RnVuYyB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS92YWxpZGF0aW9uJztcbmltcG9ydCB7XG4gIEV2ZW50U291cmNlSW5wdXQsXG4gIEV2ZW50SW5wdXRUcmFuc2Zvcm1lcixcbiAgRXZlbnRTb3VyY2VFcnJvclJlc3BvbnNlSGFuZGxlcixcbiAgRXZlbnRTb3VyY2VTdWNjZXNzUmVzcG9uc2VIYW5kbGVyXG59IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9zdHJ1Y3RzL2V2ZW50LXNvdXJjZSc7XG5pbXBvcnQgeyBJTlBVVF9OQU1FUywgSU5QVVRfSVNfREVFUCwgT1VUUFVUX05BTUVTIH0gZnJvbSAnLi9mdWxsY2FsZW5kYXItb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z1bGwtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgRnVsbENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGRlZXBDaGFuZ2VEZXRlY3Rpb24/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgY2FsZW5kYXI6IENhbGVuZGFyO1xuICBwcml2YXRlIGRpcnR5UHJvcHM6IGFueSA9IHt9O1xuICBwcml2YXRlIGRlZXBDb3BpZXM6IGFueSA9IHt9OyAvLyBob2xkcyBmcm96ZW4gc3RhdGVzXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jYWxlbmRhciA9IG5ldyBDYWxlbmRhcih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5idWlsZE9wdGlvbnMoKSk7XG4gICAgdGhpcy5jYWxlbmRhci5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcblxuICAgIE9VVFBVVF9OQU1FUy5mb3JFYWNoKG91dHB1dE5hbWUgPT4ge1xuICAgICAgb3B0aW9uc1tvdXRwdXROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXNbb3V0cHV0TmFtZV0uZW1pdCguLi5hcmdzKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBkbyBhZnRlciBvdXRwdXRzLCBzbyB0aGF0IGlucHV0cyB3aXRoIHNhbWUgbmFtZSBvdmVycmlkZVxuICAgIElOUFVUX05BTUVTLmZvckVhY2goaW5wdXROYW1lID0+IHtcbiAgICAgIGxldCBpbnB1dFZhbCA9IHRoaXNbaW5wdXROYW1lXTtcblxuICAgICAgaWYgKGlucHV0VmFsICE9PSB1bmRlZmluZWQpIHsgLy8gdW5mb3J0dW5hdGVseSBGQyBjaG9rZXMgd2hlbiBzb21lIHByb3BzIGFyZSBzZXQgdG8gdW5kZWZpbmVkXG5cbiAgICAgICAgaWYgKHRoaXMuZGVlcENoYW5nZURldGVjdGlvbiAmJiBJTlBVVF9JU19ERUVQW2lucHV0TmFtZV0pIHtcbiAgICAgICAgICBpbnB1dFZhbCA9IGRlZXBDb3B5KGlucHV0VmFsKTtcbiAgICAgICAgICB0aGlzLmRlZXBDb3BpZXNbaW5wdXROYW1lXSA9IGlucHV0VmFsOyAvLyBzaWRlIGVmZmVjdCFcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnNbaW5wdXROYW1lXSA9IGlucHV0VmFsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKlxuICBjYWxsZWQgYmVmb3JlIG5nT25DaGFuZ2VzLCBhbGxvd3MgdXMgdG8gbWFudWFsbHkgZGV0ZWN0IGlucHV0IGNoYW5nZXMuXG4gIGNhbGxlZCBtdWNoIG1vcmUgb2Z0ZW4gdGhhbiBuZ09uQ2hhbmdlcy5cbiAgKi9cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyICYmIHRoaXMuZGVlcENoYW5nZURldGVjdGlvbikgeyAvLyBub3QgdGhlIGluaXRpYWwgcmVuZGVyIEFORCB3ZSBkbyBkZWVwLW11dGF0aW9uIGNoZWNrc1xuICAgICAgY29uc3QgeyBkZWVwQ29waWVzIH0gPSB0aGlzO1xuXG4gICAgICBmb3IgKGNvbnN0IGlucHV0TmFtZSBpbiBJTlBVVF9JU19ERUVQKSB7XG4gICAgICAgIGlmIChJTlBVVF9JU19ERUVQLmhhc093blByb3BlcnR5KGlucHV0TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBpbnB1dFZhbCA9IHRoaXNbaW5wdXROYW1lXTtcblxuICAgICAgICAgIGlmIChpbnB1dFZhbCAhPT0gdW5kZWZpbmVkKSB7IC8vIHVuZm9ydHVuYXRlbHkgRkMgY2hva2VzIHdoZW4gc29tZSBwcm9wcyBhcmUgc2V0IHRvIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKCFkZWVwRXF1YWwoaW5wdXRWYWwsIGRlZXBDb3BpZXNbaW5wdXROYW1lXSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgY29weSA9IGRlZXBDb3B5KGlucHV0VmFsKTtcbiAgICAgICAgICAgICAgZGVlcENvcGllc1tpbnB1dE5hbWVdID0gY29weTtcbiAgICAgICAgICAgICAgdGhpcy5kaXJ0eVByb3BzW2lucHV0TmFtZV0gPSBjb3B5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gIGNhbGxlZCB3aXRoIGNvbmZpcm1lZCBjaGFuZ2VzIHRvIGlucHV0IHJlZmVyZW5jZXNcbiAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyKSB7IC8vIG5vdCB0aGUgaW5pdGlhbCByZW5kZXJcblxuICAgICAgZm9yIChjb25zdCBpbnB1dE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShpbnB1dE5hbWUpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVlcENvcGllc1tpbnB1dE5hbWVdID09PSB1bmRlZmluZWQpIHsgLy8gbm90IGFscmVhZHkgaGFuZGxlZCBpbiBuZ0RvQ2hlY2tcbiAgICAgICAgICAgIHRoaXMuZGlydHlQcm9wc1tpbnB1dE5hbWVdID0gY2hhbmdlc1tpbnB1dE5hbWVdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgY29uc3QgeyBkaXJ0eVByb3BzIH0gPSB0aGlzOyAvLyBob2xkIG9uIHRvIHJlZmVyZW5jZSBiZWZvcmUgY2xlYXJpbmdcblxuICAgIGlmIChPYmplY3Qua2V5cyhkaXJ0eVByb3BzKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRpcnR5UHJvcHMgPSB7fTsgLy8gY2xlYXIgZmlyc3QsIGluIGNhc2UgdGhlIHJlcmVuZGVyIGNhdXNlcyBuZXcgZGlydGluZXNzXG4gICAgICB0aGlzLmNhbGVuZGFyLm11dGF0ZU9wdGlvbnMoZGlydHlQcm9wcywgW10sIGZhbHNlLCBkZWVwRXF1YWwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2FsZW5kYXIuZGVzdHJveSgpO1xuICAgIHRoaXMuY2FsZW5kYXIgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldEFwaSgpOiBDYWxlbmRhciB7XG4gICAgcmV0dXJuIHRoaXMuY2FsZW5kYXI7XG4gIH1cblxuICAvKlxuICBUT0RPOiB0aGUgZm9sbG93aW5nIElucHV0cy9PdXRwdXRzIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IHJld3JpdHRlbiBmb3IgZWFjaCB2ZXJzaW9uIGJ1bXBcbiAgb2YgdGhlIGNvcmUgcHJvamVjdC4gQSBzY3JpcHQgd2lsbCBiZSB3cml0dGVuIHRvIG92ZXJ3cml0ZSB0aGUgYWN0dWFseSBzb3VyY2UgY29kZSBoZXJlLlxuICBJdCBpcyB1c3VhbGx5IGdvb2QgdG8gcHV0IGEgY2xhc3MncyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgQkVGT1JFIHRoZSBtZXRob2RzLCBidXQgaW4gdGhpcyBjYXNlLFxuICBzaW5jZSB0aGUgcHJvcGVydGllcyB3aWxsIGJlIHByb2dyYW1tYXRpY2FsbHkgZ2VuZXJhdGVkLCBiZXR0ZXIgdG8gcHV0IHRoZW0gYWZ0ZXIuXG4gICovXG5cbiAgQElucHV0KCkgaGVhZGVyPzogYm9vbGVhbiB8IFRvb2xiYXJJbnB1dDtcbiAgQElucHV0KCkgZm9vdGVyPzogYm9vbGVhbiB8IFRvb2xiYXJJbnB1dDtcbiAgQElucHV0KCkgY3VzdG9tQnV0dG9ucz86IHsgW25hbWU6IHN0cmluZ106IEN1c3RvbUJ1dHRvbklucHV0IH07XG4gIEBJbnB1dCgpIGJ1dHRvbkljb25zPzogYm9vbGVhbiB8IEJ1dHRvbkljb25zSW5wdXQ7XG4gIEBJbnB1dCgpIHRoZW1lU3lzdGVtPzogJ3N0YW5kYXJkJyB8IHN0cmluZztcbiAgQElucHV0KCkgYm9vdHN0cmFwRm9udEF3ZXNvbWU/OiBib29sZWFuIHwgQnV0dG9uSWNvbnNJbnB1dDtcbiAgQElucHV0KCkgZmlyc3REYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRpcj86ICdsdHInIHwgJ3J0bCcgfCAnYXV0byc7XG4gIEBJbnB1dCgpIHdlZWtlbmRzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlkZGVuRGF5cz86IG51bWJlcltdO1xuICBASW5wdXQoKSBmaXhlZFdlZWtDb3VudD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2Vla051bWJlcnNXaXRoaW5EYXlzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2Vla051bWJlckNhbGN1bGF0aW9uPzogJ2xvY2FsJyB8ICdJU08nIHwgKChtOiBEYXRlKSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBidXNpbmVzc0hvdXJzPzogQnVzaW5lc3NIb3Vyc0lucHV0O1xuICBASW5wdXQoKSBzaG93Tm9uQ3VycmVudERhdGVzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVpZ2h0PzogbnVtYmVyIHwgJ2F1dG8nIHwgJ3BhcmVudCcgfCAoKCkgPT4gbnVtYmVyKTtcbiAgQElucHV0KCkgY29udGVudEhlaWdodD86IG51bWJlciB8ICdhdXRvJyB8ICgoKSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBhc3BlY3RSYXRpbz86IG51bWJlcjtcbiAgQElucHV0KCkgaGFuZGxlV2luZG93UmVzaXplPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2luZG93UmVzaXplRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGV2ZW50TGltaXQ/OiBib29sZWFuIHwgbnVtYmVyO1xuICBASW5wdXQoKSBldmVudExpbWl0Q2xpY2s/OiAncG9wb3ZlcicgfCAnd2VlaycgfCAnZGF5JyB8IHN0cmluZyB8ICgoY2VsbGluZm86IENlbGxJbmZvLCBqc2V2ZW50OiBFdmVudCkgPT4gdm9pZCk7XG4gIEBJbnB1dCgpIHRpbWVab25lPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KCkgbm93PzogRGF0ZUlucHV0IHwgKCgpID0+IERhdGVJbnB1dCk7XG4gIEBJbnB1dCgpIGRlZmF1bHRWaWV3Pzogc3RyaW5nO1xuICBASW5wdXQoKSBhbGxEYXlTbG90PzogYm9vbGVhbjtcbiAgQElucHV0KCkgYWxsRGF5VGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgc2xvdER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2xvdExhYmVsRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIHNsb3RMYWJlbEludGVydmFsPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc25hcER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2Nyb2xsVGltZT86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIG1pblRpbWU/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBtYXhUaW1lPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2xvdEV2ZW50T3ZlcmxhcD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpc3REYXlGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpc3REYXlBbHRGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vRXZlbnRzTWVzc2FnZT86IHN0cmluZztcbiAgQElucHV0KCkgZGVmYXVsdERhdGU/OiBEYXRlSW5wdXQ7XG4gIEBJbnB1dCgpIG5vd0luZGljYXRvcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHZpc2libGVSYW5nZT86ICgoY3VycmVudERhdGU6IERhdGUpID0+IERhdGVSYW5nZUlucHV0KSB8IERhdGVSYW5nZUlucHV0O1xuICBASW5wdXQoKSB2YWxpZFJhbmdlPzogRGF0ZVJhbmdlSW5wdXQ7XG4gIEBJbnB1dCgpIGRhdGVJbmNyZW1lbnQ/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBkYXRlQWxpZ25tZW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSBkdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGRheUNvdW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBsb2NhbGVzPzogUmF3TG9jYWxlW107XG4gIEBJbnB1dCgpIGxvY2FsZT86IExvY2FsZVNpbmd1bGFyQXJnO1xuICBASW5wdXQoKSBldmVudFRpbWVGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlclRleHQ/OiBzdHJpbmcgfCAoKGRhdGU6IERhdGVJbnB1dCkgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVySHRtbD86IHN0cmluZyB8ICgoZGF0ZTogRGF0ZUlucHV0KSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSB0aXRsZUZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSB3ZWVrTGFiZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc3BsYXlFdmVudFRpbWU/OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNwbGF5RXZlbnRFbmQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudExpbWl0VGV4dD86IHN0cmluZyB8ICgoZXZlbnRDbnQ6IG51bWJlcikgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgZGF5UG9wb3ZlckZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSBuYXZMaW5rcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5hdkxpbmtEYXlDbGljaz86IHN0cmluZyB8ICgoZGF0ZTogRGF0ZSwganNFdmVudDogRXZlbnQpID0+IHZvaWQpO1xuICBASW5wdXQoKSBuYXZMaW5rV2Vla0NsaWNrPzogc3RyaW5nIHwgKCh3ZWVrU3RhcnQ6IGFueSwganNFdmVudDogRXZlbnQpID0+IHZvaWQpO1xuICBASW5wdXQoKSBzZWxlY3RhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0TWlycm9yPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdW5zZWxlY3RBdXRvPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdW5zZWxlY3RDYW5jZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHRBbGxEYXlFdmVudER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgZGVmYXVsdFRpbWVkRXZlbnREdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGNtZEZvcm1hdHRlcj86IHN0cmluZztcbiAgQElucHV0KCkgZGVmYXVsdFJhbmdlU2VwYXJhdG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBzZWxlY3RDb25zdHJhaW50PzogQ29uc3RyYWludElucHV0O1xuICBASW5wdXQoKSBzZWxlY3RPdmVybGFwPzogYm9vbGVhbiB8IE92ZXJsYXBGdW5jO1xuICBASW5wdXQoKSBzZWxlY3RBbGxvdz86IEFsbG93RnVuYztcbiAgQElucHV0KCkgc2VsZWN0TWluRGlzdGFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGVkaXRhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRTdGFydEVkaXRhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnREdXJhdGlvbkVkaXRhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRDb25zdHJhaW50PzogQ29uc3RyYWludElucHV0O1xuICBASW5wdXQoKSBldmVudE92ZXJsYXA/OiBib29sZWFuIHwgT3ZlcmxhcEZ1bmM7XG4gIEBJbnB1dCgpIGV2ZW50QWxsb3c/OiBBbGxvd0Z1bmM7XG4gIEBJbnB1dCgpIGV2ZW50Q2xhc3NOYW1lPzogc3RyaW5nW10gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50Q2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgc3RyaW5nO1xuICBASW5wdXQoKSBldmVudEJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRCb3JkZXJDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRUZXh0Q29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50Q29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50cz86IEV2ZW50U291cmNlSW5wdXQ7XG4gIEBJbnB1dCgpIGV2ZW50U291cmNlcz86IEV2ZW50U291cmNlSW5wdXRbXTtcbiAgQElucHV0KCkgYWxsRGF5RGVmYXVsdD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN0YXJ0UGFyYW0/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVuZFBhcmFtPzogc3RyaW5nO1xuICBASW5wdXQoKSBsYXp5RmV0Y2hpbmc/OiBib29sZWFuO1xuICBASW5wdXQoKSBuZXh0RGF5VGhyZXNob2xkPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgZXZlbnRPcmRlcj86IHN0cmluZyB8IEFycmF5PCgoYTogRXZlbnRBcGksIGI6IEV2ZW50QXBpKSA9PiBudW1iZXIpIHwgKHN0cmluZyB8ICgoYTogRXZlbnRBcGksIGI6IEV2ZW50QXBpKSA9PiBudW1iZXIpKT47XG4gIEBJbnB1dCgpIHJlcmVuZGVyRGVsYXk/OiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBkcmFnUmV2ZXJ0RHVyYXRpb24/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyYWdTY3JvbGw/OiBib29sZWFuO1xuICBASW5wdXQoKSBsb25nUHJlc3NEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgZXZlbnRMb25nUHJlc3NEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgZHJvcHBhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZHJvcEFjY2VwdD86IHN0cmluZyB8ICgoZHJhZ2dhYmxlOiBhbnkpID0+IGJvb2xlYW4pO1xuICBASW5wdXQoKSBldmVudERhdGFUcmFuc2Zvcm0/OiBFdmVudElucHV0VHJhbnNmb3JtZXI7XG4gIEBJbnB1dCgpIGFsbERheU1haW50YWluRHVyYXRpb24/OiBCb29sZWFuO1xuICBASW5wdXQoKSBldmVudFJlc2l6YWJsZUZyb21TdGFydD86IEJvb2xlYW47XG4gIEBJbnB1dCgpIHRpbWVHcmlkRXZlbnRNaW5IZWlnaHQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGFsbERheUh0bWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50RHJhZ01pbkRpc3RhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKSBldmVudFNvdXJjZUZhaWx1cmU/OiBFdmVudFNvdXJjZUVycm9yUmVzcG9uc2VIYW5kbGVyO1xuICBASW5wdXQoKSBldmVudFNvdXJjZVN1Y2Nlc3M/OiBFdmVudFNvdXJjZVN1Y2Nlc3NSZXNwb25zZUhhbmRsZXI7XG4gIEBJbnB1dCgpIGZvcmNlRXZlbnREdXJhdGlvbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb2dyZXNzaXZlRXZlbnRSZW5kZXJpbmc/OiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RMb25nUHJlc3NEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgdGltZVpvbmVQYXJhbT86IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGVSYW5nZVNlcGFyYXRvcj86IHN0cmluZztcbiAgLy8gY29tcG91bmQgT3B0aW9uc0lucHV0Li4uXG4gIEBJbnB1dCgpIGJ1dHRvblRleHQ/OiBCdXR0b25UZXh0Q29tcG91bmRJbnB1dDtcbiAgQElucHV0KCkgdmlld3M/OiB7IFt2aWV3SWQ6IHN0cmluZ106IFZpZXdPcHRpb25zSW5wdXQgfTtcbiAgQElucHV0KCkgcGx1Z2lucz86IChQbHVnaW5EZWYgfCBzdHJpbmcpW107XG4gIC8vIHNjaGVkdWxlci4uLlxuICBASW5wdXQoKSBzY2hlZHVsZXJMaWNlbnNlS2V5Pzogc3RyaW5nO1xuICBASW5wdXQoKSByZXNvdXJjZXM/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlTGFiZWxUZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSByZXNvdXJjZU9yZGVyPzogYW55O1xuICBASW5wdXQoKSBmaWx0ZXJSZXNvdXJjZXNXaXRoRXZlbnRzPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZVRleHQ/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlR3JvdXBGaWVsZD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VHcm91cFRleHQ/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlQXJlYVdpZHRoPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUNvbHVtbnM/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlc0luaXRpYWxseUV4cGFuZGVkPzogYW55O1xuICBASW5wdXQoKSBzbG90V2lkdGg/OiBhbnk7XG4gIEBJbnB1dCgpIGRhdGVzQWJvdmVSZXNvdXJjZXM/OiBhbnk7XG4gIEBJbnB1dCgpIGdvb2dsZUNhbGVuZGFyQXBpS2V5Pzogc3RyaW5nO1xuICBASW5wdXQoKSByZWZldGNoUmVzb3VyY2VzT25OYXZpZ2F0ZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50UmVzb3VyY2VFZGl0YWJsZT86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHdpbmRvd1Jlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF0ZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudE1vdXNlRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50TW91c2VMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB1bnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgbG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRQb3NpdGlvbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREcmFnU3RvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlc2l6ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlc2l6ZVN0b3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlY2VpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50TGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIF9kZXN0cm95ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gVE9ETzogbWFrZSB0aGVzZSBpbnB1dHMuLi5cbiAgQE91dHB1dCgpIHZpZXdTa2VsZXRvblJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgdmlld1NrZWxldG9uRGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF0ZXNSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRhdGVzRGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF5UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByZXNvdXJjZVJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xufVxuIl19