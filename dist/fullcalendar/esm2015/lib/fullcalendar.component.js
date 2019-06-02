/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import deepEqual from 'fast-deep-equal';
import { default as deepCopy } from 'deep-copy';
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { INPUT_NAMES, INPUT_IS_DEEP, OUTPUT_NAMES } from './fullcalendar-options';
export class FullCalendarComponent {
    // holds frozen states
    /**
     * @param {?} element
     */
    constructor(element) {
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
    ngAfterViewInit() {
        this.calendar = new Calendar(this.element.nativeElement, this.buildOptions());
        this.calendar.render();
    }
    /**
     * @private
     * @return {?}
     */
    buildOptions() {
        /** @type {?} */
        const options = {};
        OUTPUT_NAMES.forEach((/**
         * @param {?} outputName
         * @return {?}
         */
        outputName => {
            options[outputName] = (/**
             * @param {...?} args
             * @return {?}
             */
            (...args) => {
                this[outputName].emit(...args);
            });
        }));
        // do after outputs, so that inputs with same name override
        INPUT_NAMES.forEach((/**
         * @param {?} inputName
         * @return {?}
         */
        inputName => {
            /** @type {?} */
            let inputVal = this[inputName];
            if (inputVal !== undefined) { // unfortunately FC chokes when some props are set to undefined
                if (this.deepChangeDetection && INPUT_IS_DEEP[inputName]) {
                    inputVal = deepCopy(inputVal);
                    this.deepCopies[inputName] = inputVal; // side effect!
                }
                options[inputName] = inputVal;
            }
        }));
        return options;
    }
    /*
      called before ngOnChanges, allows us to manually detect input changes.
      called much more often than ngOnChanges.
      */
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.calendar && this.deepChangeDetection) { // not the initial render AND we do deep-mutation checks
            // not the initial render AND we do deep-mutation checks
            const { deepCopies } = this;
            for (const inputName in INPUT_IS_DEEP) {
                if (INPUT_IS_DEEP.hasOwnProperty(inputName)) {
                    /** @type {?} */
                    const inputVal = this[inputName];
                    if (inputVal !== undefined) { // unfortunately FC chokes when some props are set to undefined
                        if (!deepEqual(inputVal, deepCopies[inputName])) {
                            /** @type {?} */
                            const copy = deepCopy(inputVal);
                            deepCopies[inputName] = copy;
                            this.dirtyProps[inputName] = copy;
                        }
                    }
                }
            }
        }
    }
    /*
      called with confirmed changes to input references
      */
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.calendar) { // not the initial render
            for (const inputName in changes) {
                if (changes.hasOwnProperty(inputName)) {
                    if (this.deepCopies[inputName] === undefined) { // not already handled in ngDoCheck
                        this.dirtyProps[inputName] = changes[inputName].currentValue;
                    }
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        const { dirtyProps } = this;
        if (Object.keys(dirtyProps).length > 0) {
            this.dirtyProps = {}; // clear first, in case the rerender causes new dirtiness
            this.calendar.mutateOptions(dirtyProps, [], false, deepEqual);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.calendar.destroy();
        this.calendar = null;
    }
    /**
     * @return {?}
     */
    getApi() {
        return this.calendar;
    }
}
FullCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'full-calendar',
                template: ''
            }] }
];
/** @nocollapse */
FullCalendarComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmdWxsY2FsZW5kYXIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9mdWxsY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFPYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUE0RCxNQUFNLG9CQUFvQixDQUFDO0FBb0J4RyxPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU1sRixNQUFNLE9BQU8scUJBQXFCOzs7OztJQVFoQyxZQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBSC9CLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsZUFBVSxHQUFRLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQjtRQStPMUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FB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QThDOztJQUM5QyxzQ0FBd0Q7O0lBQ3hELHdDQUEwQzs7SUFFMUMsb0RBQXNDOztJQUN0QywwQ0FBeUI7O0lBQ3pCLGtEQUFvQzs7SUFDcEMsOENBQTZCOztJQUM3QiwwREFBeUM7O0lBQ3pDLDZDQUE0Qjs7SUFDNUIsbURBQWtDOztJQUNsQyxrREFBaUM7O0lBQ2pDLGtEQUFpQzs7SUFDakMsZ0RBQStCOztJQUMvQiwyREFBMEM7O0lBQzFDLDBDQUF5Qjs7SUFDekIsb0RBQW1DOztJQUNuQyxxREFBdUM7O0lBQ3ZDLDJEQUE4Qzs7SUFDOUMsc0RBQXlDOztJQUV6Qyw2Q0FBaUQ7O0lBQ2pELDBDQUE4Qzs7SUFDOUMsMkNBQStDOztJQUMvQyxnREFBb0Q7O0lBQ3BELGdEQUFvRDs7SUFDcEQsdUNBQTJDOztJQUMzQyx5Q0FBNkM7O0lBQzdDLHdDQUE0Qzs7SUFDNUMsZ0RBQW9EOztJQUNwRCwrQ0FBbUQ7O0lBQ25ELDhDQUFrRDs7SUFDbEQsMENBQThDOztJQUM5QyxpREFBcUQ7O0lBQ3JELGdEQUFvRDs7SUFDcEQsNENBQWdEOztJQUNoRCxxQ0FBeUM7O0lBQ3pDLDZDQUFpRDs7SUFDakQsMkNBQStDOztJQUMvQywyQ0FBK0M7O0lBRS9DLG1EQUF1RDs7SUFDdkQsb0RBQXdEOztJQUN4RCw0Q0FBZ0Q7O0lBQ2hELDZDQUFpRDs7SUFDakQsMENBQThDOztJQUM5Qyw0Q0FBZ0Q7O0lBQ2hELDZDQUFpRDs7SUFDakQsK0NBQW1EOzs7OztJQXhRdkMsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkZWVwQ29weSB9IGZyb20gJ2RlZXAtY29weSc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRG9DaGVjayxcbiAgT25DaGFuZ2VzLFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhciwgQnVzaW5lc3NIb3Vyc0lucHV0LCBDb25zdHJhaW50SW5wdXQsIEV2ZW50QXBpLCBQbHVnaW5EZWYgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgVG9vbGJhcklucHV0LFxuICBDdXN0b21CdXR0b25JbnB1dCxcbiAgQnV0dG9uSWNvbnNJbnB1dCwgQ2VsbEluZm8sXG4gIEJ1dHRvblRleHRDb21wb3VuZElucHV0LFxuICBWaWV3T3B0aW9uc0lucHV0XG59IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS90eXBlcy9pbnB1dC10eXBlcyc7XG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9lbnYnO1xuaW1wb3J0IHsgRHVyYXRpb25JbnB1dCB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2R1cmF0aW9uJztcbmltcG9ydCB7IEZvcm1hdHRlcklucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZm9ybWF0dGluZyc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VJbnB1dCB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2RhdGUtcmFuZ2UnO1xuaW1wb3J0IHsgUmF3TG9jYWxlLCBMb2NhbGVTaW5ndWxhckFyZyB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2xvY2FsZSc7XG5pbXBvcnQgeyBPdmVybGFwRnVuYywgQWxsb3dGdW5jIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHtcbiAgRXZlbnRTb3VyY2VJbnB1dCxcbiAgRXZlbnRJbnB1dFRyYW5zZm9ybWVyLFxuICBFdmVudFNvdXJjZUVycm9yUmVzcG9uc2VIYW5kbGVyLFxuICBFdmVudFNvdXJjZVN1Y2Nlc3NSZXNwb25zZUhhbmRsZXJcbn0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL3N0cnVjdHMvZXZlbnQtc291cmNlJztcbmltcG9ydCB7IElOUFVUX05BTUVTLCBJTlBVVF9JU19ERUVQLCBPVVRQVVRfTkFNRVMgfSBmcm9tICcuL2Z1bGxjYWxlbmRhci1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnVsbC1jYWxlbmRhcicsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBGdWxsQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBEb0NoZWNrLCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgZGVlcENoYW5nZURldGVjdGlvbj86IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBjYWxlbmRhcjogQ2FsZW5kYXI7XG4gIHByaXZhdGUgZGlydHlQcm9wczogYW55ID0ge307XG4gIHByaXZhdGUgZGVlcENvcGllczogYW55ID0ge307IC8vIGhvbGRzIGZyb3plbiBzdGF0ZXNcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNhbGVuZGFyID0gbmV3IENhbGVuZGFyKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1aWxkT3B0aW9ucygpKTtcbiAgICB0aGlzLmNhbGVuZGFyLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE9wdGlvbnMoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuXG4gICAgT1VUUFVUX05BTUVTLmZvckVhY2gob3V0cHV0TmFtZSA9PiB7XG4gICAgICBvcHRpb25zW291dHB1dE5hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgdGhpc1tvdXRwdXROYW1lXS5lbWl0KC4uLmFyZ3MpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIC8vIGRvIGFmdGVyIG91dHB1dHMsIHNvIHRoYXQgaW5wdXRzIHdpdGggc2FtZSBuYW1lIG92ZXJyaWRlXG4gICAgSU5QVVRfTkFNRVMuZm9yRWFjaChpbnB1dE5hbWUgPT4ge1xuICAgICAgbGV0IGlucHV0VmFsID0gdGhpc1tpbnB1dE5hbWVdO1xuXG4gICAgICBpZiAoaW5wdXRWYWwgIT09IHVuZGVmaW5lZCkgeyAvLyB1bmZvcnR1bmF0ZWx5IEZDIGNob2tlcyB3aGVuIHNvbWUgcHJvcHMgYXJlIHNldCB0byB1bmRlZmluZWRcblxuICAgICAgICBpZiAodGhpcy5kZWVwQ2hhbmdlRGV0ZWN0aW9uICYmIElOUFVUX0lTX0RFRVBbaW5wdXROYW1lXSkge1xuICAgICAgICAgIGlucHV0VmFsID0gZGVlcENvcHkoaW5wdXRWYWwpO1xuICAgICAgICAgIHRoaXMuZGVlcENvcGllc1tpbnB1dE5hbWVdID0gaW5wdXRWYWw7IC8vIHNpZGUgZWZmZWN0IVxuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uc1tpbnB1dE5hbWVdID0gaW5wdXRWYWw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qXG4gIGNhbGxlZCBiZWZvcmUgbmdPbkNoYW5nZXMsIGFsbG93cyB1cyB0byBtYW51YWxseSBkZXRlY3QgaW5wdXQgY2hhbmdlcy5cbiAgY2FsbGVkIG11Y2ggbW9yZSBvZnRlbiB0aGFuIG5nT25DaGFuZ2VzLlxuICAqL1xuICBuZ0RvQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuY2FsZW5kYXIgJiYgdGhpcy5kZWVwQ2hhbmdlRGV0ZWN0aW9uKSB7IC8vIG5vdCB0aGUgaW5pdGlhbCByZW5kZXIgQU5EIHdlIGRvIGRlZXAtbXV0YXRpb24gY2hlY2tzXG4gICAgICBjb25zdCB7IGRlZXBDb3BpZXMgfSA9IHRoaXM7XG5cbiAgICAgIGZvciAoY29uc3QgaW5wdXROYW1lIGluIElOUFVUX0lTX0RFRVApIHtcbiAgICAgICAgaWYgKElOUFVUX0lTX0RFRVAuaGFzT3duUHJvcGVydHkoaW5wdXROYW1lKSkge1xuICAgICAgICAgIGNvbnN0IGlucHV0VmFsID0gdGhpc1tpbnB1dE5hbWVdO1xuXG4gICAgICAgICAgaWYgKGlucHV0VmFsICE9PSB1bmRlZmluZWQpIHsgLy8gdW5mb3J0dW5hdGVseSBGQyBjaG9rZXMgd2hlbiBzb21lIHByb3BzIGFyZSBzZXQgdG8gdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoIWRlZXBFcXVhbChpbnB1dFZhbCwgZGVlcENvcGllc1tpbnB1dE5hbWVdKSkge1xuICAgICAgICAgICAgICBjb25zdCBjb3B5ID0gZGVlcENvcHkoaW5wdXRWYWwpO1xuICAgICAgICAgICAgICBkZWVwQ29waWVzW2lucHV0TmFtZV0gPSBjb3B5O1xuICAgICAgICAgICAgICB0aGlzLmRpcnR5UHJvcHNbaW5wdXROYW1lXSA9IGNvcHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgY2FsbGVkIHdpdGggY29uZmlybWVkIGNoYW5nZXMgdG8gaW5wdXQgcmVmZXJlbmNlc1xuICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuY2FsZW5kYXIpIHsgLy8gbm90IHRoZSBpbml0aWFsIHJlbmRlclxuXG4gICAgICBmb3IgKGNvbnN0IGlucHV0TmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGlucHV0TmFtZSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZWVwQ29waWVzW2lucHV0TmFtZV0gPT09IHVuZGVmaW5lZCkgeyAvLyBub3QgYWxyZWFkeSBoYW5kbGVkIGluIG5nRG9DaGVja1xuICAgICAgICAgICAgdGhpcy5kaXJ0eVByb3BzW2lucHV0TmFtZV0gPSBjaGFuZ2VzW2lucHV0TmFtZV0uY3VycmVudFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBjb25zdCB7IGRpcnR5UHJvcHMgfSA9IHRoaXM7IC8vIGhvbGQgb24gdG8gcmVmZXJlbmNlIGJlZm9yZSBjbGVhcmluZ1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGRpcnR5UHJvcHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZGlydHlQcm9wcyA9IHt9OyAvLyBjbGVhciBmaXJzdCwgaW4gY2FzZSB0aGUgcmVyZW5kZXIgY2F1c2VzIG5ldyBkaXJ0aW5lc3NcbiAgICAgIHRoaXMuY2FsZW5kYXIubXV0YXRlT3B0aW9ucyhkaXJ0eVByb3BzLCBbXSwgZmFsc2UsIGRlZXBFcXVhbCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jYWxlbmRhci5kZXN0cm95KCk7XG4gICAgdGhpcy5jYWxlbmRhciA9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXBpKCk6IENhbGVuZGFyIHtcbiAgICByZXR1cm4gdGhpcy5jYWxlbmRhcjtcbiAgfVxuXG4gIC8qXG4gIFRPRE86IHRoZSBmb2xsb3dpbmcgSW5wdXRzL091dHB1dHMgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgcmV3cml0dGVuIGZvciBlYWNoIHZlcnNpb24gYnVtcFxuICBvZiB0aGUgY29yZSBwcm9qZWN0LiBBIHNjcmlwdCB3aWxsIGJlIHdyaXR0ZW4gdG8gb3ZlcndyaXRlIHRoZSBhY3R1YWx5IHNvdXJjZSBjb2RlIGhlcmUuXG4gIEl0IGlzIHVzdWFsbHkgZ29vZCB0byBwdXQgYSBjbGFzcydzIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBCRUZPUkUgdGhlIG1ldGhvZHMsIGJ1dCBpbiB0aGlzIGNhc2UsXG4gIHNpbmNlIHRoZSBwcm9wZXJ0aWVzIHdpbGwgYmUgcHJvZ3JhbW1hdGljYWxseSBnZW5lcmF0ZWQsIGJldHRlciB0byBwdXQgdGhlbSBhZnRlci5cbiAgKi9cblxuICBASW5wdXQoKSBoZWFkZXI/OiBib29sZWFuIHwgVG9vbGJhcklucHV0O1xuICBASW5wdXQoKSBmb290ZXI/OiBib29sZWFuIHwgVG9vbGJhcklucHV0O1xuICBASW5wdXQoKSBjdXN0b21CdXR0b25zPzogeyBbbmFtZTogc3RyaW5nXTogQ3VzdG9tQnV0dG9uSW5wdXQgfTtcbiAgQElucHV0KCkgYnV0dG9uSWNvbnM/OiBib29sZWFuIHwgQnV0dG9uSWNvbnNJbnB1dDtcbiAgQElucHV0KCkgdGhlbWVTeXN0ZW0/OiAnc3RhbmRhcmQnIHwgc3RyaW5nO1xuICBASW5wdXQoKSBib290c3RyYXBGb250QXdlc29tZT86IGJvb2xlYW4gfCBCdXR0b25JY29uc0lucHV0O1xuICBASW5wdXQoKSBmaXJzdERheT86IG51bWJlcjtcbiAgQElucHV0KCkgZGlyPzogJ2x0cicgfCAncnRsJyB8ICdhdXRvJztcbiAgQElucHV0KCkgd2Vla2VuZHM/OiBib29sZWFuO1xuICBASW5wdXQoKSBoaWRkZW5EYXlzPzogbnVtYmVyW107XG4gIEBJbnB1dCgpIGZpeGVkV2Vla0NvdW50PzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2Vla051bWJlcnM/OiBib29sZWFuO1xuICBASW5wdXQoKSB3ZWVrTnVtYmVyc1dpdGhpbkRheXM/OiBib29sZWFuO1xuICBASW5wdXQoKSB3ZWVrTnVtYmVyQ2FsY3VsYXRpb24/OiAnbG9jYWwnIHwgJ0lTTycgfCAoKG06IERhdGUpID0+IG51bWJlcik7XG4gIEBJbnB1dCgpIGJ1c2luZXNzSG91cnM/OiBCdXNpbmVzc0hvdXJzSW5wdXQ7XG4gIEBJbnB1dCgpIHNob3dOb25DdXJyZW50RGF0ZXM/OiBib29sZWFuO1xuICBASW5wdXQoKSBoZWlnaHQ/OiBudW1iZXIgfCAnYXV0bycgfCAncGFyZW50JyB8ICgoKSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBjb250ZW50SGVpZ2h0PzogbnVtYmVyIHwgJ2F1dG8nIHwgKCgpID0+IG51bWJlcik7XG4gIEBJbnB1dCgpIGFzcGVjdFJhdGlvPzogbnVtYmVyO1xuICBASW5wdXQoKSBoYW5kbGVXaW5kb3dSZXNpemU/OiBib29sZWFuO1xuICBASW5wdXQoKSB3aW5kb3dSZXNpemVEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgZXZlbnRMaW1pdD86IGJvb2xlYW4gfCBudW1iZXI7XG4gIEBJbnB1dCgpIGV2ZW50TGltaXRDbGljaz86ICdwb3BvdmVyJyB8ICd3ZWVrJyB8ICdkYXknIHwgc3RyaW5nIHwgKChjZWxsaW5mbzogQ2VsbEluZm8sIGpzZXZlbnQ6IEV2ZW50KSA9PiB2b2lkKTtcbiAgQElucHV0KCkgdGltZVpvbmU/OiBzdHJpbmcgfCBib29sZWFuO1xuICBASW5wdXQoKSBub3c/OiBEYXRlSW5wdXQgfCAoKCkgPT4gRGF0ZUlucHV0KTtcbiAgQElucHV0KCkgZGVmYXVsdFZpZXc/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFsbERheVNsb3Q/OiBib29sZWFuO1xuICBASW5wdXQoKSBhbGxEYXlUZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBzbG90RHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBzbG90TGFiZWxGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgc2xvdExhYmVsSW50ZXJ2YWw/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBzbmFwRHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBzY3JvbGxUaW1lPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgbWluVGltZT86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIG1heFRpbWU/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBzbG90RXZlbnRPdmVybGFwPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdERheUZvcm1hdD86IEZvcm1hdHRlcklucHV0IHwgYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdERheUFsdEZvcm1hdD86IEZvcm1hdHRlcklucHV0IHwgYm9vbGVhbjtcbiAgQElucHV0KCkgbm9FdmVudHNNZXNzYWdlPzogc3RyaW5nO1xuICBASW5wdXQoKSBkZWZhdWx0RGF0ZT86IERhdGVJbnB1dDtcbiAgQElucHV0KCkgbm93SW5kaWNhdG9yPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdmlzaWJsZVJhbmdlPzogKChjdXJyZW50RGF0ZTogRGF0ZSkgPT4gRGF0ZVJhbmdlSW5wdXQpIHwgRGF0ZVJhbmdlSW5wdXQ7XG4gIEBJbnB1dCgpIHZhbGlkUmFuZ2U/OiBEYXRlUmFuZ2VJbnB1dDtcbiAgQElucHV0KCkgZGF0ZUluY3JlbWVudD86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGRhdGVBbGlnbm1lbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgZGF5Q291bnQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxvY2FsZXM/OiBSYXdMb2NhbGVbXTtcbiAgQElucHV0KCkgbG9jYWxlPzogTG9jYWxlU2luZ3VsYXJBcmc7XG4gIEBJbnB1dCgpIGV2ZW50VGltZUZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSBjb2x1bW5IZWFkZXI/OiBib29sZWFuO1xuICBASW5wdXQoKSBjb2x1bW5IZWFkZXJGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyVGV4dD86IHN0cmluZyB8ICgoZGF0ZTogRGF0ZUlucHV0KSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSBjb2x1bW5IZWFkZXJIdG1sPzogc3RyaW5nIHwgKChkYXRlOiBEYXRlSW5wdXQpID0+IHN0cmluZyk7XG4gIEBJbnB1dCgpIHRpdGxlRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIHdlZWtMYWJlbD86IHN0cmluZztcbiAgQElucHV0KCkgZGlzcGxheUV2ZW50VGltZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc3BsYXlFdmVudEVuZD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50TGltaXRUZXh0Pzogc3RyaW5nIHwgKChldmVudENudDogbnVtYmVyKSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSBkYXlQb3BvdmVyRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIG5hdkxpbmtzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgbmF2TGlua0RheUNsaWNrPzogc3RyaW5nIHwgKChkYXRlOiBEYXRlLCBqc0V2ZW50OiBFdmVudCkgPT4gdm9pZCk7XG4gIEBJbnB1dCgpIG5hdkxpbmtXZWVrQ2xpY2s/OiBzdHJpbmcgfCAoKHdlZWtTdGFydDogYW55LCBqc0V2ZW50OiBFdmVudCkgPT4gdm9pZCk7XG4gIEBJbnB1dCgpIHNlbGVjdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RNaXJyb3I/OiBib29sZWFuO1xuICBASW5wdXQoKSB1bnNlbGVjdEF1dG8/OiBib29sZWFuO1xuICBASW5wdXQoKSB1bnNlbGVjdENhbmNlbD86IHN0cmluZztcbiAgQElucHV0KCkgZGVmYXVsdEFsbERheUV2ZW50RHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBkZWZhdWx0VGltZWRFdmVudER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgY21kRm9ybWF0dGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBkZWZhdWx0UmFuZ2VTZXBhcmF0b3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdENvbnN0cmFpbnQ/OiBDb25zdHJhaW50SW5wdXQ7XG4gIEBJbnB1dCgpIHNlbGVjdE92ZXJsYXA/OiBib29sZWFuIHwgT3ZlcmxhcEZ1bmM7XG4gIEBJbnB1dCgpIHNlbGVjdEFsbG93PzogQWxsb3dGdW5jO1xuICBASW5wdXQoKSBzZWxlY3RNaW5EaXN0YW5jZT86IG51bWJlcjtcbiAgQElucHV0KCkgZWRpdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudFN0YXJ0RWRpdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudER1cmF0aW9uRWRpdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudENvbnN0cmFpbnQ/OiBDb25zdHJhaW50SW5wdXQ7XG4gIEBJbnB1dCgpIGV2ZW50T3ZlcmxhcD86IGJvb2xlYW4gfCBPdmVybGFwRnVuYztcbiAgQElucHV0KCkgZXZlbnRBbGxvdz86IEFsbG93RnVuYztcbiAgQElucHV0KCkgZXZlbnRDbGFzc05hbWU/OiBzdHJpbmdbXSB8IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRDbGFzc05hbWVzPzogc3RyaW5nW10gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50QmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudEJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudFRleHRDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRzPzogRXZlbnRTb3VyY2VJbnB1dDtcbiAgQElucHV0KCkgZXZlbnRTb3VyY2VzPzogRXZlbnRTb3VyY2VJbnB1dFtdO1xuICBASW5wdXQoKSBhbGxEYXlEZWZhdWx0PzogYm9vbGVhbjtcbiAgQElucHV0KCkgc3RhcnRQYXJhbT86IHN0cmluZztcbiAgQElucHV0KCkgZW5kUGFyYW0/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhenlGZXRjaGluZz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5leHREYXlUaHJlc2hvbGQ/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBldmVudE9yZGVyPzogc3RyaW5nIHwgQXJyYXk8KChhOiBFdmVudEFwaSwgYjogRXZlbnRBcGkpID0+IG51bWJlcikgfCAoc3RyaW5nIHwgKChhOiBFdmVudEFwaSwgYjogRXZlbnRBcGkpID0+IG51bWJlcikpPjtcbiAgQElucHV0KCkgcmVyZW5kZXJEZWxheT86IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIGRyYWdSZXZlcnREdXJhdGlvbj86IG51bWJlcjtcbiAgQElucHV0KCkgZHJhZ1Njcm9sbD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvbmdQcmVzc0RlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBldmVudExvbmdQcmVzc0RlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBkcm9wcGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBkcm9wQWNjZXB0Pzogc3RyaW5nIHwgKChkcmFnZ2FibGU6IGFueSkgPT4gYm9vbGVhbik7XG4gIEBJbnB1dCgpIGV2ZW50RGF0YVRyYW5zZm9ybT86IEV2ZW50SW5wdXRUcmFuc2Zvcm1lcjtcbiAgQElucHV0KCkgYWxsRGF5TWFpbnRhaW5EdXJhdGlvbj86IEJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50UmVzaXphYmxlRnJvbVN0YXJ0PzogQm9vbGVhbjtcbiAgQElucHV0KCkgdGltZUdyaWRFdmVudE1pbkhlaWdodD86IG51bWJlcjtcbiAgQElucHV0KCkgYWxsRGF5SHRtbD86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnREcmFnTWluRGlzdGFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGV2ZW50U291cmNlRmFpbHVyZT86IEV2ZW50U291cmNlRXJyb3JSZXNwb25zZUhhbmRsZXI7XG4gIEBJbnB1dCgpIGV2ZW50U291cmNlU3VjY2Vzcz86IEV2ZW50U291cmNlU3VjY2Vzc1Jlc3BvbnNlSGFuZGxlcjtcbiAgQElucHV0KCkgZm9yY2VFdmVudER1cmF0aW9uPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJvZ3Jlc3NpdmVFdmVudFJlbmRlcmluZz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdExvbmdQcmVzc0RlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSB0aW1lWm9uZVBhcmFtPzogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZVJhbmdlU2VwYXJhdG9yPzogc3RyaW5nO1xuICAvLyBjb21wb3VuZCBPcHRpb25zSW5wdXQuLi5cbiAgQElucHV0KCkgYnV0dG9uVGV4dD86IEJ1dHRvblRleHRDb21wb3VuZElucHV0O1xuICBASW5wdXQoKSB2aWV3cz86IHsgW3ZpZXdJZDogc3RyaW5nXTogVmlld09wdGlvbnNJbnB1dCB9O1xuICBASW5wdXQoKSBwbHVnaW5zPzogKFBsdWdpbkRlZiB8IHN0cmluZylbXTtcbiAgLy8gc2NoZWR1bGVyLi4uXG4gIEBJbnB1dCgpIHNjaGVkdWxlckxpY2Vuc2VLZXk/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc291cmNlcz86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VMYWJlbFRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc291cmNlT3JkZXI/OiBhbnk7XG4gIEBJbnB1dCgpIGZpbHRlclJlc291cmNlc1dpdGhFdmVudHM/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlVGV4dD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VHcm91cEZpZWxkPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUdyb3VwVGV4dD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VBcmVhV2lkdGg/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlQ29sdW1ucz86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VzSW5pdGlhbGx5RXhwYW5kZWQ/OiBhbnk7XG4gIEBJbnB1dCgpIHNsb3RXaWR0aD86IGFueTtcbiAgQElucHV0KCkgZGF0ZXNBYm92ZVJlc291cmNlcz86IGFueTtcbiAgQElucHV0KCkgZ29vZ2xlQ2FsZW5kYXJBcGlLZXk/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlZmV0Y2hSZXNvdXJjZXNPbk5hdmlnYXRlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRSZXNvdXJjZUVkaXRhYmxlPzogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgd2luZG93UmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkYXRlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50TW91c2VFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRNb3VzZUxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBsb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFBvc2l0aW9uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50RHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERyYWdTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVzaXplU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVzaXplU3RvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVjZWl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgX2Rlc3Ryb3llZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBUT0RPOiBtYWtlIHRoZXNlIGlucHV0cy4uLlxuICBAT3V0cHV0KCkgdmlld1NrZWxldG9uUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB2aWV3U2tlbGV0b25EZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkYXRlc1JlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF0ZXNEZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkYXlSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHJlc291cmNlUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG59XG4iXX0=