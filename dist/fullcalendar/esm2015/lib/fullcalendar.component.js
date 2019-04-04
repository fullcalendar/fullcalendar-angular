/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { INPUT_NAMES, EVENT_NAMES } from './fullcalendar-options';
export class FullCalendarComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.datesRender = new EventEmitter();
        this.datesDestroy = new EventEmitter();
        this.dayRender = new EventEmitter();
        this.windowResize = new EventEmitter();
        this.dateClick = new EventEmitter();
        this.eventClick = new EventEmitter();
        this.eventMouseEnter = new EventEmitter();
        this.eventMouseLeave = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.eventRender = new EventEmitter();
        this.eventPositioned = new EventEmitter();
        this.eventDestroy = new EventEmitter();
        this.eventDragStart = new EventEmitter();
        this.eventDragStop = new EventEmitter();
        this.eventDrop = new EventEmitter();
        this.eventResizeStart = new EventEmitter();
        this.eventResizeStop = new EventEmitter();
        this.eventResize = new EventEmitter();
        this.drop = new EventEmitter();
        this.eventReceive = new EventEmitter();
        this.eventLeave = new EventEmitter();
        this.viewSkeletonRender = new EventEmitter();
        this.viewSkeletonDestroy = new EventEmitter();
        this._destroyed = new EventEmitter();
        // scheduler...
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
     * @return {?}
     */
    buildOptions() {
        /** @type {?} */
        const options = {};
        EVENT_NAMES.forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        eventName => {
            options[eventName] = (/**
             * @param {?} info
             * @return {?}
             */
            info => {
                this[eventName].emit(info); // TODO: handle more than one arg?
            });
        }));
        INPUT_NAMES.forEach((/**
         * @param {?} inputName
         * @return {?}
         */
        inputName => {
            if (this[inputName] !== undefined) { // unfortunately FC chokes when some props are set to undefined
                options[inputName] = this[inputName];
            }
        }));
        return options;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.calendar) { // not the initial render
            // not the initial render
            /** @type {?} */
            const updatedInputs = {};
            for (const inputName in changes) {
                if (changes.hasOwnProperty(inputName)) {
                    updatedInputs[inputName] = changes[inputName].currentValue;
                }
            }
            this.calendar.setOptions(updatedInputs);
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
    datesRender: [{ type: Output }],
    datesDestroy: [{ type: Output }],
    dayRender: [{ type: Output }],
    windowResize: [{ type: Output }],
    dateClick: [{ type: Output }],
    eventClick: [{ type: Output }],
    eventMouseEnter: [{ type: Output }],
    eventMouseLeave: [{ type: Output }],
    select: [{ type: Output }],
    unselect: [{ type: Output }],
    eventRender: [{ type: Output }],
    eventPositioned: [{ type: Output }],
    eventDestroy: [{ type: Output }],
    eventDragStart: [{ type: Output }],
    eventDragStop: [{ type: Output }],
    eventDrop: [{ type: Output }],
    eventResizeStart: [{ type: Output }],
    eventResizeStop: [{ type: Output }],
    eventResize: [{ type: Output }],
    drop: [{ type: Output }],
    eventReceive: [{ type: Output }],
    eventLeave: [{ type: Output }],
    viewSkeletonRender: [{ type: Output }],
    viewSkeletonDestroy: [{ type: Output }],
    _destroyed: [{ type: Output }],
    resourceRender: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullCalendarComponent.prototype.calendar;
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
    FullCalendarComponent.prototype.datesRender;
    /** @type {?} */
    FullCalendarComponent.prototype.datesDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.dayRender;
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
    FullCalendarComponent.prototype.eventRender;
    /** @type {?} */
    FullCalendarComponent.prototype.eventPositioned;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDestroy;
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
    FullCalendarComponent.prototype.viewSkeletonRender;
    /** @type {?} */
    FullCalendarComponent.prototype.viewSkeletonDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype._destroyed;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceRender;
    /**
     * @type {?}
     * @private
     */
    FullCalendarComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmdWxsY2FsZW5kYXIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9mdWxsY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFLYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUE0RCxNQUFNLG9CQUFvQixDQUFDO0FBZXhHLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFNbEUsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUloQyxZQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBbUw3QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZDLG1CQUFjLEdB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ICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXIsIEJ1c2luZXNzSG91cnNJbnB1dCwgQ29uc3RyYWludElucHV0LCBFdmVudEFwaSwgUGx1Z2luRGVmIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlJztcbmltcG9ydCB7XG4gIFRvb2xiYXJJbnB1dCxcbiAgQ3VzdG9tQnV0dG9uSW5wdXQsXG4gIEJ1dHRvbkljb25zSW5wdXQsIENlbGxJbmZvLFxuICBCdXR0b25UZXh0Q29tcG91bmRJbnB1dCxcbiAgVmlld09wdGlvbnNJbnB1dFxufSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvdHlwZXMvaW5wdXQtdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZW52JztcbmltcG9ydCB7IER1cmF0aW9uSW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9kdXJhdGlvbic7XG5pbXBvcnQgeyBGb3JtYXR0ZXJJbnB1dCB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2Zvcm1hdHRpbmcnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlSW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9kYXRlLXJhbmdlJztcbmltcG9ydCB7IFJhd0xvY2FsZSwgTG9jYWxlU2luZ3VsYXJBcmcgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9sb2NhbGUnO1xuaW1wb3J0IHsgT3ZlcmxhcEZ1bmMsIEFsbG93RnVuYyB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS92YWxpZGF0aW9uJztcbmltcG9ydCB7IEV2ZW50U291cmNlSW5wdXQsIEV2ZW50SW5wdXRUcmFuc2Zvcm1lciB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9zdHJ1Y3RzL2V2ZW50LXNvdXJjZSc7XG5pbXBvcnQgeyBJTlBVVF9OQU1FUywgRVZFTlRfTkFNRVMgfSBmcm9tICcuL2Z1bGxjYWxlbmRhci1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnVsbC1jYWxlbmRhcicsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBGdWxsQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBjYWxlbmRhcjogQ2FsZW5kYXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNhbGVuZGFyID0gbmV3IENhbGVuZGFyKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmJ1aWxkT3B0aW9ucygpKTtcbiAgICB0aGlzLmNhbGVuZGFyLnJlbmRlcigpO1xuICB9XG5cbiAgYnVpbGRPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcblxuICAgIEVWRU5UX05BTUVTLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIG9wdGlvbnNbZXZlbnROYW1lXSA9IGluZm8gPT4ge1xuICAgICAgICB0aGlzW2V2ZW50TmFtZV0uZW1pdChpbmZvKTsgLy8gVE9ETzogaGFuZGxlIG1vcmUgdGhhbiBvbmUgYXJnP1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIElOUFVUX05BTUVTLmZvckVhY2goaW5wdXROYW1lID0+IHtcbiAgICAgIGlmICh0aGlzW2lucHV0TmFtZV0gIT09IHVuZGVmaW5lZCkgeyAvLyB1bmZvcnR1bmF0ZWx5IEZDIGNob2tlcyB3aGVuIHNvbWUgcHJvcHMgYXJlIHNldCB0byB1bmRlZmluZWRcbiAgICAgICAgb3B0aW9uc1tpbnB1dE5hbWVdID0gdGhpc1tpbnB1dE5hbWVdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuY2FsZW5kYXIpIHsgLy8gbm90IHRoZSBpbml0aWFsIHJlbmRlclxuICAgICAgY29uc3QgdXBkYXRlZElucHV0cyA9IHt9O1xuXG4gICAgICBmb3IgKGNvbnN0IGlucHV0TmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGlucHV0TmFtZSkpIHtcbiAgICAgICAgICB1cGRhdGVkSW5wdXRzW2lucHV0TmFtZV0gPSBjaGFuZ2VzW2lucHV0TmFtZV0uY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FsZW5kYXIuc2V0T3B0aW9ucyh1cGRhdGVkSW5wdXRzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNhbGVuZGFyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNhbGVuZGFyID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBcGkoKTogQ2FsZW5kYXIge1xuICAgIHJldHVybiB0aGlzLmNhbGVuZGFyO1xuICB9XG5cblxuICAvKlxuICBUT0RPOiB0aGUgZm9sbG93aW5nIElucHV0cy9PdXRwdXRzIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IHJld3JpdHRlbiBmb3IgZWFjaCB2ZXJzaW9uIGJ1bXBcbiAgb2YgdGhlIGNvcmUgcHJvamVjdC4gQSBzY3JpcHQgd2lsbCBiZSB3cml0dGVuIHRvIG92ZXJ3cml0ZSB0aGUgYWN0dWFseSBzb3VyY2UgY29kZSBoZXJlLlxuICBJdCBpcyB1c3VhbGx5IGdvb2QgdG8gcHV0IGEgY2xhc3MncyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgQkVGT1JFIHRoZSBtZXRob2RzLCBidXQgaW4gdGhpcyBjYXNlLFxuICBzaW5jZSB0aGUgcHJvcGVydGllcyB3aWxsIGJlIHByb2dyYW1tYXRpY2FsbHkgZ2VuZXJhdGVkLCBiZXR0ZXIgdG8gcHV0IHRoZW0gYWZ0ZXIuXG4gICovXG5cbiAgQElucHV0KCkgaGVhZGVyPzogYm9vbGVhbiB8IFRvb2xiYXJJbnB1dDtcbiAgQElucHV0KCkgZm9vdGVyPzogYm9vbGVhbiB8IFRvb2xiYXJJbnB1dDtcbiAgQElucHV0KCkgY3VzdG9tQnV0dG9ucz86IHsgW25hbWU6IHN0cmluZ106IEN1c3RvbUJ1dHRvbklucHV0IH07XG4gIEBJbnB1dCgpIGJ1dHRvbkljb25zPzogYm9vbGVhbiB8IEJ1dHRvbkljb25zSW5wdXQ7XG4gIEBJbnB1dCgpIHRoZW1lU3lzdGVtPzogJ3N0YW5kYXJkJyB8IHN0cmluZztcbiAgQElucHV0KCkgYm9vdHN0cmFwRm9udEF3ZXNvbWU/OiBib29sZWFuIHwgQnV0dG9uSWNvbnNJbnB1dDtcbiAgQElucHV0KCkgZmlyc3REYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRpcj86ICdsdHInIHwgJ3J0bCcgfCAnYXV0byc7XG4gIEBJbnB1dCgpIHdlZWtlbmRzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlkZGVuRGF5cz86IG51bWJlcltdO1xuICBASW5wdXQoKSBmaXhlZFdlZWtDb3VudD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2Vla051bWJlcnNXaXRoaW5EYXlzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2Vla051bWJlckNhbGN1bGF0aW9uPzogJ2xvY2FsJyB8ICdJU08nIHwgKChtOiBEYXRlKSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBidXNpbmVzc0hvdXJzPzogQnVzaW5lc3NIb3Vyc0lucHV0O1xuICBASW5wdXQoKSBzaG93Tm9uQ3VycmVudERhdGVzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVpZ2h0PzogbnVtYmVyIHwgJ2F1dG8nIHwgJ3BhcmVudCcgfCAoKCkgPT4gbnVtYmVyKTtcbiAgQElucHV0KCkgY29udGVudEhlaWdodD86IG51bWJlciB8ICdhdXRvJyB8ICgoKSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBhc3BlY3RSYXRpbz86IG51bWJlcjtcbiAgQElucHV0KCkgaGFuZGxlV2luZG93UmVzaXplPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2luZG93UmVzaXplRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGV2ZW50TGltaXQ/OiBib29sZWFuIHwgbnVtYmVyO1xuICBASW5wdXQoKSBldmVudExpbWl0Q2xpY2s/OiAncG9wb3ZlcicgfCAnd2VlaycgfCAnZGF5JyB8IHN0cmluZyB8ICgoY2VsbGluZm86IENlbGxJbmZvLCBqc2V2ZW50OiBFdmVudCkgPT4gdm9pZCk7XG4gIEBJbnB1dCgpIHRpbWVab25lPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KCkgbm93PzogRGF0ZUlucHV0IHwgKCgpID0+IERhdGVJbnB1dCk7XG4gIEBJbnB1dCgpIGRlZmF1bHRWaWV3Pzogc3RyaW5nO1xuICBASW5wdXQoKSBhbGxEYXlTbG90PzogYm9vbGVhbjtcbiAgQElucHV0KCkgYWxsRGF5VGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgc2xvdER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2xvdExhYmVsRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIHNsb3RMYWJlbEludGVydmFsPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc25hcER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2Nyb2xsVGltZT86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIG1pblRpbWU/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBtYXhUaW1lPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2xvdEV2ZW50T3ZlcmxhcD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpc3REYXlGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpc3REYXlBbHRGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vRXZlbnRzTWVzc2FnZT86IHN0cmluZztcbiAgQElucHV0KCkgZGVmYXVsdERhdGU/OiBEYXRlSW5wdXQ7XG4gIEBJbnB1dCgpIG5vd0luZGljYXRvcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHZpc2libGVSYW5nZT86ICgoY3VycmVudERhdGU6IERhdGUpID0+IERhdGVSYW5nZUlucHV0KSB8IERhdGVSYW5nZUlucHV0O1xuICBASW5wdXQoKSB2YWxpZFJhbmdlPzogRGF0ZVJhbmdlSW5wdXQ7XG4gIEBJbnB1dCgpIGRhdGVJbmNyZW1lbnQ/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBkYXRlQWxpZ25tZW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSBkdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGRheUNvdW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBsb2NhbGVzPzogUmF3TG9jYWxlW107XG4gIEBJbnB1dCgpIGxvY2FsZT86IExvY2FsZVNpbmd1bGFyQXJnO1xuICBASW5wdXQoKSBldmVudFRpbWVGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlclRleHQ/OiBzdHJpbmcgfCAoKGRhdGU6IERhdGVJbnB1dCkgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVySHRtbD86IHN0cmluZyB8ICgoZGF0ZTogRGF0ZUlucHV0KSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSB0aXRsZUZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSB3ZWVrTGFiZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc3BsYXlFdmVudFRpbWU/OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNwbGF5RXZlbnRFbmQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudExpbWl0VGV4dD86IHN0cmluZyB8ICgoZXZlbnRDbnQ6IG51bWJlcikgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgZGF5UG9wb3ZlckZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSBuYXZMaW5rcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5hdkxpbmtEYXlDbGljaz86IHN0cmluZyB8ICgoZGF0ZTogRGF0ZSwganNFdmVudDogRXZlbnQpID0+IHZvaWQpO1xuICBASW5wdXQoKSBuYXZMaW5rV2Vla0NsaWNrPzogc3RyaW5nIHwgKCh3ZWVrU3RhcnQ6IGFueSwganNFdmVudDogRXZlbnQpID0+IHZvaWQpO1xuICBASW5wdXQoKSBzZWxlY3RhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0TWlycm9yPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdW5zZWxlY3RBdXRvPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdW5zZWxlY3RDYW5jZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHRBbGxEYXlFdmVudER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgZGVmYXVsdFRpbWVkRXZlbnREdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGNtZEZvcm1hdHRlcj86IHN0cmluZztcbiAgQElucHV0KCkgZGVmYXVsdFJhbmdlU2VwYXJhdG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBzZWxlY3RDb25zdHJhaW50PzogQ29uc3RyYWludElucHV0O1xuICBASW5wdXQoKSBzZWxlY3RPdmVybGFwPzogYm9vbGVhbiB8IE92ZXJsYXBGdW5jO1xuICBASW5wdXQoKSBzZWxlY3RBbGxvdz86IEFsbG93RnVuYztcbiAgQElucHV0KCkgZWRpdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudFN0YXJ0RWRpdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudER1cmF0aW9uRWRpdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudENvbnN0cmFpbnQ/OiBDb25zdHJhaW50SW5wdXQ7XG4gIEBJbnB1dCgpIGV2ZW50T3ZlcmxhcD86IGJvb2xlYW4gfCBPdmVybGFwRnVuYztcbiAgQElucHV0KCkgZXZlbnRBbGxvdz86IEFsbG93RnVuYztcbiAgQElucHV0KCkgZXZlbnRDbGFzc05hbWU/OiBzdHJpbmdbXSB8IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRDbGFzc05hbWVzPzogc3RyaW5nW10gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50QmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudEJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudFRleHRDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRzPzogRXZlbnRTb3VyY2VJbnB1dDtcbiAgQElucHV0KCkgZXZlbnRTb3VyY2VzPzogRXZlbnRTb3VyY2VJbnB1dFtdO1xuICBASW5wdXQoKSBhbGxEYXlEZWZhdWx0PzogYm9vbGVhbjtcbiAgQElucHV0KCkgc3RhcnRQYXJhbT86IHN0cmluZztcbiAgQElucHV0KCkgZW5kUGFyYW0/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhenlGZXRjaGluZz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5leHREYXlUaHJlc2hvbGQ/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBldmVudE9yZGVyPzogc3RyaW5nIHwgQXJyYXk8KChhOiBFdmVudEFwaSwgYjogRXZlbnRBcGkpID0+IG51bWJlcikgfCAoc3RyaW5nIHwgKChhOiBFdmVudEFwaSwgYjogRXZlbnRBcGkpID0+IG51bWJlcikpPjtcbiAgQElucHV0KCkgcmVyZW5kZXJEZWxheT86IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIGRyYWdSZXZlcnREdXJhdGlvbj86IG51bWJlcjtcbiAgQElucHV0KCkgZHJhZ1Njcm9sbD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvbmdQcmVzc0RlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBldmVudExvbmdQcmVzc0RlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBkcm9wcGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBkcm9wQWNjZXB0Pzogc3RyaW5nIHwgKChkcmFnZ2FibGU6IGFueSkgPT4gYm9vbGVhbik7XG4gIEBJbnB1dCgpIGV2ZW50RGF0YVRyYW5zZm9ybT86IEV2ZW50SW5wdXRUcmFuc2Zvcm1lcjtcbiAgQElucHV0KCkgYWxsRGF5TWFpbnRhaW5EdXJhdGlvbj86IEJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50UmVzaXphYmxlRnJvbVN0YXJ0PzogQm9vbGVhbjtcbiAgLy8gY29tcG91bmQgT3B0aW9uc0lucHV0Li4uXG4gIEBJbnB1dCgpIGJ1dHRvblRleHQ/OiBCdXR0b25UZXh0Q29tcG91bmRJbnB1dDtcbiAgQElucHV0KCkgdmlld3M/OiB7IFt2aWV3SWQ6IHN0cmluZ106IFZpZXdPcHRpb25zSW5wdXQgfTtcbiAgQElucHV0KCkgcGx1Z2lucz86IChQbHVnaW5EZWYgfCBzdHJpbmcpW107XG4gIC8vIHNjaGVkdWxlci4uLlxuICBASW5wdXQoKSBzY2hlZHVsZXJMaWNlbnNlS2V5Pzogc3RyaW5nO1xuICBASW5wdXQoKSByZXNvdXJjZXM/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlTGFiZWxUZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSByZXNvdXJjZU9yZGVyPzogYW55O1xuICBASW5wdXQoKSBmaWx0ZXJSZXNvdXJjZXNXaXRoRXZlbnRzPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZVRleHQ/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlR3JvdXBGaWVsZD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VHcm91cFRleHQ/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlQXJlYVdpZHRoPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUNvbHVtbnM/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlc0luaXRpYWxseUV4cGFuZGVkPzogYW55O1xuICBASW5wdXQoKSBzbG90V2lkdGg/OiBhbnk7XG4gIEBJbnB1dCgpIGRhdGVzQWJvdmVSZXNvdXJjZXM/OiBhbnk7XG5cbiAgQE91dHB1dCgpIGRhdGVzUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkYXRlc0Rlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRheVJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgd2luZG93UmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkYXRlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50TW91c2VFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRNb3VzZUxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRQb3NpdGlvbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50RHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERyYWdTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVzaXplU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVzaXplU3RvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVjZWl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgdmlld1NrZWxldG9uUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB2aWV3U2tlbGV0b25EZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBfZGVzdHJveWVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIHNjaGVkdWxlci4uLlxuICBAT3V0cHV0KCkgcmVzb3VyY2VSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbn1cbiJdfQ==