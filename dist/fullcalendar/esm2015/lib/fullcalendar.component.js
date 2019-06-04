/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import deepEqual from 'fast-deep-equal';
import { deepCopy } from './utils';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmdWxsY2FsZW5kYXIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9mdWxsY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQU9iLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQTRELE1BQU0sb0JBQW9CLENBQUM7QUFvQnhHLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTWxGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBUWhDLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFIL0IsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQVEsRUFBRSxDQUFDLENBQUMsc0JBQXNCO1FBK08xQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsbUJBQWMs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LHNDQUF3RDs7SUFDeEQsd0NBQTBDOztJQUUxQyxvREFBc0M7O0lBQ3RDLDBDQUF5Qjs7SUFDekIsa0RBQW9DOztJQUNwQyw4Q0FBNkI7O0lBQzdCLDBEQUF5Qzs7SUFDekMsNkNBQTRCOztJQUM1QixtREFBa0M7O0lBQ2xDLGtEQUFpQzs7SUFDakMsa0RBQWlDOztJQUNqQyxnREFBK0I7O0lBQy9CLDJEQUEwQzs7SUFDMUMsMENBQXlCOztJQUN6QixvREFBbUM7O0lBQ25DLHFEQUF1Qzs7SUFDdkMsMkRBQThDOztJQUM5QyxzREFBeUM7O0lBRXpDLDZDQUFpRDs7SUFDakQsMENBQThDOztJQUM5QywyQ0FBK0M7O0lBQy9DLGdEQUFvRDs7SUFDcEQsZ0RBQW9EOztJQUNwRCx1Q0FBMkM7O0lBQzNDLHlDQUE2Qzs7SUFDN0Msd0NBQTRDOztJQUM1QyxnREFBb0Q7O0lBQ3BELCtDQUFtRDs7SUFDbkQsOENBQWtEOztJQUNsRCwwQ0FBOEM7O0lBQzlDLGlEQUFxRDs7SUFDckQsZ0RBQW9EOztJQUNwRCw0Q0FBZ0Q7O0lBQ2hELHFDQUF5Qzs7SUFDekMsNkNBQWlEOztJQUNqRCwyQ0FBK0M7O0lBQy9DLDJDQUErQzs7SUFFL0MsbURBQXVEOztJQUN2RCxvREFBd0Q7O0lBQ3hELDRDQUFnRDs7SUFDaEQsNkNBQWlEOztJQUNqRCwwQ0FBOEM7O0lBQzlDLDRDQUFnRDs7SUFDaEQsNkNBQWlEOztJQUNqRCwrQ0FBbUQ7Ozs7O0lBeFF2Qyx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVlcEVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEFmdGVyVmlld0luaXQsXG4gIERvQ2hlY2ssXG4gIE9uQ2hhbmdlcyxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXIsIEJ1c2luZXNzSG91cnNJbnB1dCwgQ29uc3RyYWludElucHV0LCBFdmVudEFwaSwgUGx1Z2luRGVmIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlJztcbmltcG9ydCB7XG4gIFRvb2xiYXJJbnB1dCxcbiAgQ3VzdG9tQnV0dG9uSW5wdXQsXG4gIEJ1dHRvbkljb25zSW5wdXQsIENlbGxJbmZvLFxuICBCdXR0b25UZXh0Q29tcG91bmRJbnB1dCxcbiAgVmlld09wdGlvbnNJbnB1dFxufSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvdHlwZXMvaW5wdXQtdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZW52JztcbmltcG9ydCB7IER1cmF0aW9uSW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9kdXJhdGlvbic7XG5pbXBvcnQgeyBGb3JtYXR0ZXJJbnB1dCB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2Zvcm1hdHRpbmcnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlSW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9kYXRlLXJhbmdlJztcbmltcG9ydCB7IFJhd0xvY2FsZSwgTG9jYWxlU2luZ3VsYXJBcmcgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9sb2NhbGUnO1xuaW1wb3J0IHsgT3ZlcmxhcEZ1bmMsIEFsbG93RnVuYyB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS92YWxpZGF0aW9uJztcbmltcG9ydCB7XG4gIEV2ZW50U291cmNlSW5wdXQsXG4gIEV2ZW50SW5wdXRUcmFuc2Zvcm1lcixcbiAgRXZlbnRTb3VyY2VFcnJvclJlc3BvbnNlSGFuZGxlcixcbiAgRXZlbnRTb3VyY2VTdWNjZXNzUmVzcG9uc2VIYW5kbGVyXG59IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9zdHJ1Y3RzL2V2ZW50LXNvdXJjZSc7XG5pbXBvcnQgeyBJTlBVVF9OQU1FUywgSU5QVVRfSVNfREVFUCwgT1VUUFVUX05BTUVTIH0gZnJvbSAnLi9mdWxsY2FsZW5kYXItb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z1bGwtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgRnVsbENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGRlZXBDaGFuZ2VEZXRlY3Rpb24/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgY2FsZW5kYXI6IENhbGVuZGFyO1xuICBwcml2YXRlIGRpcnR5UHJvcHM6IGFueSA9IHt9O1xuICBwcml2YXRlIGRlZXBDb3BpZXM6IGFueSA9IHt9OyAvLyBob2xkcyBmcm96ZW4gc3RhdGVzXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jYWxlbmRhciA9IG5ldyBDYWxlbmRhcih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5idWlsZE9wdGlvbnMoKSk7XG4gICAgdGhpcy5jYWxlbmRhci5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcblxuICAgIE9VVFBVVF9OQU1FUy5mb3JFYWNoKG91dHB1dE5hbWUgPT4ge1xuICAgICAgb3B0aW9uc1tvdXRwdXROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHRoaXNbb3V0cHV0TmFtZV0uZW1pdCguLi5hcmdzKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBkbyBhZnRlciBvdXRwdXRzLCBzbyB0aGF0IGlucHV0cyB3aXRoIHNhbWUgbmFtZSBvdmVycmlkZVxuICAgIElOUFVUX05BTUVTLmZvckVhY2goaW5wdXROYW1lID0+IHtcbiAgICAgIGxldCBpbnB1dFZhbCA9IHRoaXNbaW5wdXROYW1lXTtcblxuICAgICAgaWYgKGlucHV0VmFsICE9PSB1bmRlZmluZWQpIHsgLy8gdW5mb3J0dW5hdGVseSBGQyBjaG9rZXMgd2hlbiBzb21lIHByb3BzIGFyZSBzZXQgdG8gdW5kZWZpbmVkXG5cbiAgICAgICAgaWYgKHRoaXMuZGVlcENoYW5nZURldGVjdGlvbiAmJiBJTlBVVF9JU19ERUVQW2lucHV0TmFtZV0pIHtcbiAgICAgICAgICBpbnB1dFZhbCA9IGRlZXBDb3B5KGlucHV0VmFsKTtcbiAgICAgICAgICB0aGlzLmRlZXBDb3BpZXNbaW5wdXROYW1lXSA9IGlucHV0VmFsOyAvLyBzaWRlIGVmZmVjdCFcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnNbaW5wdXROYW1lXSA9IGlucHV0VmFsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKlxuICBjYWxsZWQgYmVmb3JlIG5nT25DaGFuZ2VzLCBhbGxvd3MgdXMgdG8gbWFudWFsbHkgZGV0ZWN0IGlucHV0IGNoYW5nZXMuXG4gIGNhbGxlZCBtdWNoIG1vcmUgb2Z0ZW4gdGhhbiBuZ09uQ2hhbmdlcy5cbiAgKi9cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyICYmIHRoaXMuZGVlcENoYW5nZURldGVjdGlvbikgeyAvLyBub3QgdGhlIGluaXRpYWwgcmVuZGVyIEFORCB3ZSBkbyBkZWVwLW11dGF0aW9uIGNoZWNrc1xuICAgICAgY29uc3QgeyBkZWVwQ29waWVzIH0gPSB0aGlzO1xuXG4gICAgICBmb3IgKGNvbnN0IGlucHV0TmFtZSBpbiBJTlBVVF9JU19ERUVQKSB7XG4gICAgICAgIGlmIChJTlBVVF9JU19ERUVQLmhhc093blByb3BlcnR5KGlucHV0TmFtZSkpIHtcbiAgICAgICAgICBjb25zdCBpbnB1dFZhbCA9IHRoaXNbaW5wdXROYW1lXTtcblxuICAgICAgICAgIGlmIChpbnB1dFZhbCAhPT0gdW5kZWZpbmVkKSB7IC8vIHVuZm9ydHVuYXRlbHkgRkMgY2hva2VzIHdoZW4gc29tZSBwcm9wcyBhcmUgc2V0IHRvIHVuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKCFkZWVwRXF1YWwoaW5wdXRWYWwsIGRlZXBDb3BpZXNbaW5wdXROYW1lXSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgY29weSA9IGRlZXBDb3B5KGlucHV0VmFsKTtcbiAgICAgICAgICAgICAgZGVlcENvcGllc1tpbnB1dE5hbWVdID0gY29weTtcbiAgICAgICAgICAgICAgdGhpcy5kaXJ0eVByb3BzW2lucHV0TmFtZV0gPSBjb3B5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qXG4gIGNhbGxlZCB3aXRoIGNvbmZpcm1lZCBjaGFuZ2VzIHRvIGlucHV0IHJlZmVyZW5jZXNcbiAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyKSB7IC8vIG5vdCB0aGUgaW5pdGlhbCByZW5kZXJcblxuICAgICAgZm9yIChjb25zdCBpbnB1dE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShpbnB1dE5hbWUpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVlcENvcGllc1tpbnB1dE5hbWVdID09PSB1bmRlZmluZWQpIHsgLy8gbm90IGFscmVhZHkgaGFuZGxlZCBpbiBuZ0RvQ2hlY2tcbiAgICAgICAgICAgIHRoaXMuZGlydHlQcm9wc1tpbnB1dE5hbWVdID0gY2hhbmdlc1tpbnB1dE5hbWVdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgY29uc3QgeyBkaXJ0eVByb3BzIH0gPSB0aGlzOyAvLyBob2xkIG9uIHRvIHJlZmVyZW5jZSBiZWZvcmUgY2xlYXJpbmdcblxuICAgIGlmIChPYmplY3Qua2V5cyhkaXJ0eVByb3BzKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRpcnR5UHJvcHMgPSB7fTsgLy8gY2xlYXIgZmlyc3QsIGluIGNhc2UgdGhlIHJlcmVuZGVyIGNhdXNlcyBuZXcgZGlydGluZXNzXG4gICAgICB0aGlzLmNhbGVuZGFyLm11dGF0ZU9wdGlvbnMoZGlydHlQcm9wcywgW10sIGZhbHNlLCBkZWVwRXF1YWwpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2FsZW5kYXIuZGVzdHJveSgpO1xuICAgIHRoaXMuY2FsZW5kYXIgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldEFwaSgpOiBDYWxlbmRhciB7XG4gICAgcmV0dXJuIHRoaXMuY2FsZW5kYXI7XG4gIH1cblxuICAvKlxuICBUT0RPOiB0aGUgZm9sbG93aW5nIElucHV0cy9PdXRwdXRzIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IHJld3JpdHRlbiBmb3IgZWFjaCB2ZXJzaW9uIGJ1bXBcbiAgb2YgdGhlIGNvcmUgcHJvamVjdC4gQSBzY3JpcHQgd2lsbCBiZSB3cml0dGVuIHRvIG92ZXJ3cml0ZSB0aGUgYWN0dWFseSBzb3VyY2UgY29kZSBoZXJlLlxuICBJdCBpcyB1c3VhbGx5IGdvb2QgdG8gcHV0IGEgY2xhc3MncyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgQkVGT1JFIHRoZSBtZXRob2RzLCBidXQgaW4gdGhpcyBjYXNlLFxuICBzaW5jZSB0aGUgcHJvcGVydGllcyB3aWxsIGJlIHByb2dyYW1tYXRpY2FsbHkgZ2VuZXJhdGVkLCBiZXR0ZXIgdG8gcHV0IHRoZW0gYWZ0ZXIuXG4gICovXG5cbiAgQElucHV0KCkgaGVhZGVyPzogYm9vbGVhbiB8IFRvb2xiYXJJbnB1dDtcbiAgQElucHV0KCkgZm9vdGVyPzogYm9vbGVhbiB8IFRvb2xiYXJJbnB1dDtcbiAgQElucHV0KCkgY3VzdG9tQnV0dG9ucz86IHsgW25hbWU6IHN0cmluZ106IEN1c3RvbUJ1dHRvbklucHV0IH07XG4gIEBJbnB1dCgpIGJ1dHRvbkljb25zPzogYm9vbGVhbiB8IEJ1dHRvbkljb25zSW5wdXQ7XG4gIEBJbnB1dCgpIHRoZW1lU3lzdGVtPzogJ3N0YW5kYXJkJyB8IHN0cmluZztcbiAgQElucHV0KCkgYm9vdHN0cmFwRm9udEF3ZXNvbWU/OiBib29sZWFuIHwgQnV0dG9uSWNvbnNJbnB1dDtcbiAgQElucHV0KCkgZmlyc3REYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRpcj86ICdsdHInIHwgJ3J0bCcgfCAnYXV0byc7XG4gIEBJbnB1dCgpIHdlZWtlbmRzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlkZGVuRGF5cz86IG51bWJlcltdO1xuICBASW5wdXQoKSBmaXhlZFdlZWtDb3VudD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2Vla051bWJlcnNXaXRoaW5EYXlzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2Vla051bWJlckNhbGN1bGF0aW9uPzogJ2xvY2FsJyB8ICdJU08nIHwgKChtOiBEYXRlKSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBidXNpbmVzc0hvdXJzPzogQnVzaW5lc3NIb3Vyc0lucHV0O1xuICBASW5wdXQoKSBzaG93Tm9uQ3VycmVudERhdGVzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVpZ2h0PzogbnVtYmVyIHwgJ2F1dG8nIHwgJ3BhcmVudCcgfCAoKCkgPT4gbnVtYmVyKTtcbiAgQElucHV0KCkgY29udGVudEhlaWdodD86IG51bWJlciB8ICdhdXRvJyB8ICgoKSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBhc3BlY3RSYXRpbz86IG51bWJlcjtcbiAgQElucHV0KCkgaGFuZGxlV2luZG93UmVzaXplPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2luZG93UmVzaXplRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGV2ZW50TGltaXQ/OiBib29sZWFuIHwgbnVtYmVyO1xuICBASW5wdXQoKSBldmVudExpbWl0Q2xpY2s/OiAncG9wb3ZlcicgfCAnd2VlaycgfCAnZGF5JyB8IHN0cmluZyB8ICgoY2VsbGluZm86IENlbGxJbmZvLCBqc2V2ZW50OiBFdmVudCkgPT4gdm9pZCk7XG4gIEBJbnB1dCgpIHRpbWVab25lPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KCkgbm93PzogRGF0ZUlucHV0IHwgKCgpID0+IERhdGVJbnB1dCk7XG4gIEBJbnB1dCgpIGRlZmF1bHRWaWV3Pzogc3RyaW5nO1xuICBASW5wdXQoKSBhbGxEYXlTbG90PzogYm9vbGVhbjtcbiAgQElucHV0KCkgYWxsRGF5VGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgc2xvdER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2xvdExhYmVsRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIHNsb3RMYWJlbEludGVydmFsPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc25hcER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2Nyb2xsVGltZT86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIG1pblRpbWU/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBtYXhUaW1lPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2xvdEV2ZW50T3ZlcmxhcD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpc3REYXlGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpc3REYXlBbHRGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vRXZlbnRzTWVzc2FnZT86IHN0cmluZztcbiAgQElucHV0KCkgZGVmYXVsdERhdGU/OiBEYXRlSW5wdXQ7XG4gIEBJbnB1dCgpIG5vd0luZGljYXRvcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHZpc2libGVSYW5nZT86ICgoY3VycmVudERhdGU6IERhdGUpID0+IERhdGVSYW5nZUlucHV0KSB8IERhdGVSYW5nZUlucHV0O1xuICBASW5wdXQoKSB2YWxpZFJhbmdlPzogRGF0ZVJhbmdlSW5wdXQ7XG4gIEBJbnB1dCgpIGRhdGVJbmNyZW1lbnQ/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBkYXRlQWxpZ25tZW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSBkdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGRheUNvdW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBsb2NhbGVzPzogUmF3TG9jYWxlW107XG4gIEBJbnB1dCgpIGxvY2FsZT86IExvY2FsZVNpbmd1bGFyQXJnO1xuICBASW5wdXQoKSBldmVudFRpbWVGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlclRleHQ/OiBzdHJpbmcgfCAoKGRhdGU6IERhdGVJbnB1dCkgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVySHRtbD86IHN0cmluZyB8ICgoZGF0ZTogRGF0ZUlucHV0KSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSB0aXRsZUZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSB3ZWVrTGFiZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc3BsYXlFdmVudFRpbWU/OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNwbGF5RXZlbnRFbmQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudExpbWl0VGV4dD86IHN0cmluZyB8ICgoZXZlbnRDbnQ6IG51bWJlcikgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgZGF5UG9wb3ZlckZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSBuYXZMaW5rcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5hdkxpbmtEYXlDbGljaz86IHN0cmluZyB8ICgoZGF0ZTogRGF0ZSwganNFdmVudDogRXZlbnQpID0+IHZvaWQpO1xuICBASW5wdXQoKSBuYXZMaW5rV2Vla0NsaWNrPzogc3RyaW5nIHwgKCh3ZWVrU3RhcnQ6IGFueSwganNFdmVudDogRXZlbnQpID0+IHZvaWQpO1xuICBASW5wdXQoKSBzZWxlY3RhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0TWlycm9yPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdW5zZWxlY3RBdXRvPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdW5zZWxlY3RDYW5jZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHRBbGxEYXlFdmVudER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgZGVmYXVsdFRpbWVkRXZlbnREdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGNtZEZvcm1hdHRlcj86IHN0cmluZztcbiAgQElucHV0KCkgZGVmYXVsdFJhbmdlU2VwYXJhdG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBzZWxlY3RDb25zdHJhaW50PzogQ29uc3RyYWludElucHV0O1xuICBASW5wdXQoKSBzZWxlY3RPdmVybGFwPzogYm9vbGVhbiB8IE92ZXJsYXBGdW5jO1xuICBASW5wdXQoKSBzZWxlY3RBbGxvdz86IEFsbG93RnVuYztcbiAgQElucHV0KCkgc2VsZWN0TWluRGlzdGFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGVkaXRhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRTdGFydEVkaXRhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnREdXJhdGlvbkVkaXRhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRDb25zdHJhaW50PzogQ29uc3RyYWludElucHV0O1xuICBASW5wdXQoKSBldmVudE92ZXJsYXA/OiBib29sZWFuIHwgT3ZlcmxhcEZ1bmM7XG4gIEBJbnB1dCgpIGV2ZW50QWxsb3c/OiBBbGxvd0Z1bmM7XG4gIEBJbnB1dCgpIGV2ZW50Q2xhc3NOYW1lPzogc3RyaW5nW10gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50Q2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgc3RyaW5nO1xuICBASW5wdXQoKSBldmVudEJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRCb3JkZXJDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRUZXh0Q29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50Q29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50cz86IEV2ZW50U291cmNlSW5wdXQ7XG4gIEBJbnB1dCgpIGV2ZW50U291cmNlcz86IEV2ZW50U291cmNlSW5wdXRbXTtcbiAgQElucHV0KCkgYWxsRGF5RGVmYXVsdD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN0YXJ0UGFyYW0/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVuZFBhcmFtPzogc3RyaW5nO1xuICBASW5wdXQoKSBsYXp5RmV0Y2hpbmc/OiBib29sZWFuO1xuICBASW5wdXQoKSBuZXh0RGF5VGhyZXNob2xkPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgZXZlbnRPcmRlcj86IHN0cmluZyB8IEFycmF5PCgoYTogRXZlbnRBcGksIGI6IEV2ZW50QXBpKSA9PiBudW1iZXIpIHwgKHN0cmluZyB8ICgoYTogRXZlbnRBcGksIGI6IEV2ZW50QXBpKSA9PiBudW1iZXIpKT47XG4gIEBJbnB1dCgpIHJlcmVuZGVyRGVsYXk/OiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBkcmFnUmV2ZXJ0RHVyYXRpb24/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyYWdTY3JvbGw/OiBib29sZWFuO1xuICBASW5wdXQoKSBsb25nUHJlc3NEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgZXZlbnRMb25nUHJlc3NEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgZHJvcHBhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZHJvcEFjY2VwdD86IHN0cmluZyB8ICgoZHJhZ2dhYmxlOiBhbnkpID0+IGJvb2xlYW4pO1xuICBASW5wdXQoKSBldmVudERhdGFUcmFuc2Zvcm0/OiBFdmVudElucHV0VHJhbnNmb3JtZXI7XG4gIEBJbnB1dCgpIGFsbERheU1haW50YWluRHVyYXRpb24/OiBCb29sZWFuO1xuICBASW5wdXQoKSBldmVudFJlc2l6YWJsZUZyb21TdGFydD86IEJvb2xlYW47XG4gIEBJbnB1dCgpIHRpbWVHcmlkRXZlbnRNaW5IZWlnaHQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGFsbERheUh0bWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50RHJhZ01pbkRpc3RhbmNlPzogbnVtYmVyO1xuICBASW5wdXQoKSBldmVudFNvdXJjZUZhaWx1cmU/OiBFdmVudFNvdXJjZUVycm9yUmVzcG9uc2VIYW5kbGVyO1xuICBASW5wdXQoKSBldmVudFNvdXJjZVN1Y2Nlc3M/OiBFdmVudFNvdXJjZVN1Y2Nlc3NSZXNwb25zZUhhbmRsZXI7XG4gIEBJbnB1dCgpIGZvcmNlRXZlbnREdXJhdGlvbj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHByb2dyZXNzaXZlRXZlbnRSZW5kZXJpbmc/OiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RMb25nUHJlc3NEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgdGltZVpvbmVQYXJhbT86IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGVSYW5nZVNlcGFyYXRvcj86IHN0cmluZztcbiAgLy8gY29tcG91bmQgT3B0aW9uc0lucHV0Li4uXG4gIEBJbnB1dCgpIGJ1dHRvblRleHQ/OiBCdXR0b25UZXh0Q29tcG91bmRJbnB1dDtcbiAgQElucHV0KCkgdmlld3M/OiB7IFt2aWV3SWQ6IHN0cmluZ106IFZpZXdPcHRpb25zSW5wdXQgfTtcbiAgQElucHV0KCkgcGx1Z2lucz86IChQbHVnaW5EZWYgfCBzdHJpbmcpW107XG4gIC8vIHNjaGVkdWxlci4uLlxuICBASW5wdXQoKSBzY2hlZHVsZXJMaWNlbnNlS2V5Pzogc3RyaW5nO1xuICBASW5wdXQoKSByZXNvdXJjZXM/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlTGFiZWxUZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSByZXNvdXJjZU9yZGVyPzogYW55O1xuICBASW5wdXQoKSBmaWx0ZXJSZXNvdXJjZXNXaXRoRXZlbnRzPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZVRleHQ/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlR3JvdXBGaWVsZD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VHcm91cFRleHQ/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlQXJlYVdpZHRoPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUNvbHVtbnM/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlc0luaXRpYWxseUV4cGFuZGVkPzogYW55O1xuICBASW5wdXQoKSBzbG90V2lkdGg/OiBhbnk7XG4gIEBJbnB1dCgpIGRhdGVzQWJvdmVSZXNvdXJjZXM/OiBhbnk7XG4gIEBJbnB1dCgpIGdvb2dsZUNhbGVuZGFyQXBpS2V5Pzogc3RyaW5nO1xuICBASW5wdXQoKSByZWZldGNoUmVzb3VyY2VzT25OYXZpZ2F0ZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50UmVzb3VyY2VFZGl0YWJsZT86IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHdpbmRvd1Jlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF0ZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudE1vdXNlRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50TW91c2VMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB1bnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgbG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRQb3NpdGlvbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREcmFnU3RvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlc2l6ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlc2l6ZVN0b3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlY2VpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50TGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIF9kZXN0cm95ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLy8gVE9ETzogbWFrZSB0aGVzZSBpbnB1dHMuLi5cbiAgQE91dHB1dCgpIHZpZXdTa2VsZXRvblJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgdmlld1NrZWxldG9uRGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF0ZXNSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRhdGVzRGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF5UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByZXNvdXJjZVJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xufVxuIl19