/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { INPUT_NAMES, EVENT_NAMES } from './fullcalendar-options';
var FullCalendarComponent = /** @class */ (function () {
    function FullCalendarComponent(element) {
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
    FullCalendarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.calendar = new Calendar(this.element.nativeElement, this.buildOptions());
        this.calendar.render();
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.buildOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var options = {};
        EVENT_NAMES.forEach((/**
         * @param {?} eventName
         * @return {?}
         */
        function (eventName) {
            options[eventName] = (/**
             * @param {?} info
             * @return {?}
             */
            function (info) {
                _this[eventName].emit(info); // TODO: handle more than one arg?
            });
        }));
        INPUT_NAMES.forEach((/**
         * @param {?} inputName
         * @return {?}
         */
        function (inputName) {
            if (_this[inputName] !== undefined) { // unfortunately FC chokes when some props are set to undefined
                options[inputName] = _this[inputName];
            }
        }));
        return options;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FullCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.calendar) { // not the initial render
            // not the initial render
            /** @type {?} */
            var updatedInputs = {};
            for (var inputName in changes) {
                if (changes.hasOwnProperty(inputName)) {
                    updatedInputs[inputName] = changes[inputName].currentValue;
                }
            }
            this.calendar.setOptions(updatedInputs);
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
    return FullCalendarComponent;
}());
export { FullCalendarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmdWxsY2FsZW5kYXIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9mdWxsY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFLYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUE0RCxNQUFNLG9CQUFvQixDQUFDO0FBZXhHLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEU7SUFRRSwrQkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQW1MN0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENB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QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyLCBCdXNpbmVzc0hvdXJzSW5wdXQsIENvbnN0cmFpbnRJbnB1dCwgRXZlbnRBcGksIFBsdWdpbkRlZiB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZSc7XG5pbXBvcnQge1xuICBUb29sYmFySW5wdXQsXG4gIEN1c3RvbUJ1dHRvbklucHV0LFxuICBCdXR0b25JY29uc0lucHV0LCBDZWxsSW5mbyxcbiAgQnV0dG9uVGV4dENvbXBvdW5kSW5wdXQsXG4gIFZpZXdPcHRpb25zSW5wdXRcbn0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL3R5cGVzL2lucHV0LXR5cGVzJztcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2Vudic7XG5pbXBvcnQgeyBEdXJhdGlvbklucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZHVyYXRpb24nO1xuaW1wb3J0IHsgRm9ybWF0dGVySW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9mb3JtYXR0aW5nJztcbmltcG9ydCB7IERhdGVSYW5nZUlucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZGF0ZS1yYW5nZSc7XG5pbXBvcnQgeyBSYXdMb2NhbGUsIExvY2FsZVNpbmd1bGFyQXJnIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvbG9jYWxlJztcbmltcG9ydCB7IE92ZXJsYXBGdW5jLCBBbGxvd0Z1bmMgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBFdmVudFNvdXJjZUlucHV0LCBFdmVudElucHV0VHJhbnNmb3JtZXIgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvc3RydWN0cy9ldmVudC1zb3VyY2UnO1xuaW1wb3J0IHsgSU5QVVRfTkFNRVMsIEVWRU5UX05BTUVTIH0gZnJvbSAnLi9mdWxsY2FsZW5kYXItb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Z1bGwtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgRnVsbENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgY2FsZW5kYXI6IENhbGVuZGFyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jYWxlbmRhciA9IG5ldyBDYWxlbmRhcih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5idWlsZE9wdGlvbnMoKSk7XG4gICAgdGhpcy5jYWxlbmRhci5yZW5kZXIoKTtcbiAgfVxuXG4gIGJ1aWxkT3B0aW9ucygpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge307XG5cbiAgICBFVkVOVF9OQU1FUy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICBvcHRpb25zW2V2ZW50TmFtZV0gPSBpbmZvID0+IHtcbiAgICAgICAgdGhpc1tldmVudE5hbWVdLmVtaXQoaW5mbyk7IC8vIFRPRE86IGhhbmRsZSBtb3JlIHRoYW4gb25lIGFyZz9cbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBJTlBVVF9OQU1FUy5mb3JFYWNoKGlucHV0TmFtZSA9PiB7XG4gICAgICBpZiAodGhpc1tpbnB1dE5hbWVdICE9PSB1bmRlZmluZWQpIHsgLy8gdW5mb3J0dW5hdGVseSBGQyBjaG9rZXMgd2hlbiBzb21lIHByb3BzIGFyZSBzZXQgdG8gdW5kZWZpbmVkXG4gICAgICAgIG9wdGlvbnNbaW5wdXROYW1lXSA9IHRoaXNbaW5wdXROYW1lXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyKSB7IC8vIG5vdCB0aGUgaW5pdGlhbCByZW5kZXJcbiAgICAgIGNvbnN0IHVwZGF0ZWRJbnB1dHMgPSB7fTtcblxuICAgICAgZm9yIChjb25zdCBpbnB1dE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShpbnB1dE5hbWUpKSB7XG4gICAgICAgICAgdXBkYXRlZElucHV0c1tpbnB1dE5hbWVdID0gY2hhbmdlc1tpbnB1dE5hbWVdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbGVuZGFyLnNldE9wdGlvbnModXBkYXRlZElucHV0cyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jYWxlbmRhci5kZXN0cm95KCk7XG4gICAgdGhpcy5jYWxlbmRhciA9IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0QXBpKCk6IENhbGVuZGFyIHtcbiAgICByZXR1cm4gdGhpcy5jYWxlbmRhcjtcbiAgfVxuXG5cbiAgLypcbiAgVE9ETzogdGhlIGZvbGxvd2luZyBJbnB1dHMvT3V0cHV0cyBzaG91bGQgYmUgYXV0b21hdGljYWxseSByZXdyaXR0ZW4gZm9yIGVhY2ggdmVyc2lvbiBidW1wXG4gIG9mIHRoZSBjb3JlIHByb2plY3QuIEEgc2NyaXB0IHdpbGwgYmUgd3JpdHRlbiB0byBvdmVyd3JpdGUgdGhlIGFjdHVhbHkgc291cmNlIGNvZGUgaGVyZS5cbiAgSXQgaXMgdXN1YWxseSBnb29kIHRvIHB1dCBhIGNsYXNzJ3MgcHJvcGVydHkgZGVjbGFyYXRpb25zIEJFRk9SRSB0aGUgbWV0aG9kcywgYnV0IGluIHRoaXMgY2FzZSxcbiAgc2luY2UgdGhlIHByb3BlcnRpZXMgd2lsbCBiZSBwcm9ncmFtbWF0aWNhbGx5IGdlbmVyYXRlZCwgYmV0dGVyIHRvIHB1dCB0aGVtIGFmdGVyLlxuICAqL1xuXG4gIEBJbnB1dCgpIGhlYWRlcj86IGJvb2xlYW4gfCBUb29sYmFySW5wdXQ7XG4gIEBJbnB1dCgpIGZvb3Rlcj86IGJvb2xlYW4gfCBUb29sYmFySW5wdXQ7XG4gIEBJbnB1dCgpIGN1c3RvbUJ1dHRvbnM/OiB7IFtuYW1lOiBzdHJpbmddOiBDdXN0b21CdXR0b25JbnB1dCB9O1xuICBASW5wdXQoKSBidXR0b25JY29ucz86IGJvb2xlYW4gfCBCdXR0b25JY29uc0lucHV0O1xuICBASW5wdXQoKSB0aGVtZVN5c3RlbT86ICdzdGFuZGFyZCcgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGJvb3RzdHJhcEZvbnRBd2Vzb21lPzogYm9vbGVhbiB8IEJ1dHRvbkljb25zSW5wdXQ7XG4gIEBJbnB1dCgpIGZpcnN0RGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBkaXI/OiAnbHRyJyB8ICdydGwnIHwgJ2F1dG8nO1xuICBASW5wdXQoKSB3ZWVrZW5kcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhpZGRlbkRheXM/OiBudW1iZXJbXTtcbiAgQElucHV0KCkgZml4ZWRXZWVrQ291bnQ/OiBib29sZWFuO1xuICBASW5wdXQoKSB3ZWVrTnVtYmVycz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJzV2l0aGluRGF5cz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJDYWxjdWxhdGlvbj86ICdsb2NhbCcgfCAnSVNPJyB8ICgobTogRGF0ZSkgPT4gbnVtYmVyKTtcbiAgQElucHV0KCkgYnVzaW5lc3NIb3Vycz86IEJ1c2luZXNzSG91cnNJbnB1dDtcbiAgQElucHV0KCkgc2hvd05vbkN1cnJlbnREYXRlcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhlaWdodD86IG51bWJlciB8ICdhdXRvJyB8ICdwYXJlbnQnIHwgKCgpID0+IG51bWJlcik7XG4gIEBJbnB1dCgpIGNvbnRlbnRIZWlnaHQ/OiBudW1iZXIgfCAnYXV0bycgfCAoKCkgPT4gbnVtYmVyKTtcbiAgQElucHV0KCkgYXNwZWN0UmF0aW8/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGhhbmRsZVdpbmRvd1Jlc2l6ZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdpbmRvd1Jlc2l6ZURlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBldmVudExpbWl0PzogYm9vbGVhbiB8IG51bWJlcjtcbiAgQElucHV0KCkgZXZlbnRMaW1pdENsaWNrPzogJ3BvcG92ZXInIHwgJ3dlZWsnIHwgJ2RheScgfCBzdHJpbmcgfCAoKGNlbGxpbmZvOiBDZWxsSW5mbywganNldmVudDogRXZlbnQpID0+IHZvaWQpO1xuICBASW5wdXQoKSB0aW1lWm9uZT86IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vdz86IERhdGVJbnB1dCB8ICgoKSA9PiBEYXRlSW5wdXQpO1xuICBASW5wdXQoKSBkZWZhdWx0Vmlldz86IHN0cmluZztcbiAgQElucHV0KCkgYWxsRGF5U2xvdD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFsbERheVRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNsb3REdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIHNsb3RMYWJlbEZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSBzbG90TGFiZWxJbnRlcnZhbD86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIHNuYXBEdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIHNjcm9sbFRpbWU/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBtaW5UaW1lPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgbWF4VGltZT86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIHNsb3RFdmVudE92ZXJsYXA/OiBib29sZWFuO1xuICBASW5wdXQoKSBsaXN0RGF5Rm9ybWF0PzogRm9ybWF0dGVySW5wdXQgfCBib29sZWFuO1xuICBASW5wdXQoKSBsaXN0RGF5QWx0Rm9ybWF0PzogRm9ybWF0dGVySW5wdXQgfCBib29sZWFuO1xuICBASW5wdXQoKSBub0V2ZW50c01lc3NhZ2U/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHREYXRlPzogRGF0ZUlucHV0O1xuICBASW5wdXQoKSBub3dJbmRpY2F0b3I/OiBib29sZWFuO1xuICBASW5wdXQoKSB2aXNpYmxlUmFuZ2U/OiAoKGN1cnJlbnREYXRlOiBEYXRlKSA9PiBEYXRlUmFuZ2VJbnB1dCkgfCBEYXRlUmFuZ2VJbnB1dDtcbiAgQElucHV0KCkgdmFsaWRSYW5nZT86IERhdGVSYW5nZUlucHV0O1xuICBASW5wdXQoKSBkYXRlSW5jcmVtZW50PzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgZGF0ZUFsaWdubWVudD86IHN0cmluZztcbiAgQElucHV0KCkgZHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBkYXlDb3VudD86IG51bWJlcjtcbiAgQElucHV0KCkgbG9jYWxlcz86IFJhd0xvY2FsZVtdO1xuICBASW5wdXQoKSBsb2NhbGU/OiBMb2NhbGVTaW5ndWxhckFyZztcbiAgQElucHV0KCkgZXZlbnRUaW1lRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlckZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSBjb2x1bW5IZWFkZXJUZXh0Pzogc3RyaW5nIHwgKChkYXRlOiBEYXRlSW5wdXQpID0+IHN0cmluZyk7XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlckh0bWw/OiBzdHJpbmcgfCAoKGRhdGU6IERhdGVJbnB1dCkgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgdGl0bGVGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgd2Vla0xhYmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNwbGF5RXZlbnRUaW1lPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzcGxheUV2ZW50RW5kPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRMaW1pdFRleHQ/OiBzdHJpbmcgfCAoKGV2ZW50Q250OiBudW1iZXIpID0+IHN0cmluZyk7XG4gIEBJbnB1dCgpIGRheVBvcG92ZXJGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgbmF2TGlua3M/OiBib29sZWFuO1xuICBASW5wdXQoKSBuYXZMaW5rRGF5Q2xpY2s/OiBzdHJpbmcgfCAoKGRhdGU6IERhdGUsIGpzRXZlbnQ6IEV2ZW50KSA9PiB2b2lkKTtcbiAgQElucHV0KCkgbmF2TGlua1dlZWtDbGljaz86IHN0cmluZyB8ICgod2Vla1N0YXJ0OiBhbnksIGpzRXZlbnQ6IEV2ZW50KSA9PiB2b2lkKTtcbiAgQElucHV0KCkgc2VsZWN0YWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdE1pcnJvcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHVuc2VsZWN0QXV0bz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHVuc2VsZWN0Q2FuY2VsPzogc3RyaW5nO1xuICBASW5wdXQoKSBkZWZhdWx0QWxsRGF5RXZlbnREdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGRlZmF1bHRUaW1lZEV2ZW50RHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBjbWRGb3JtYXR0ZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHRSYW5nZVNlcGFyYXRvcj86IHN0cmluZztcbiAgQElucHV0KCkgc2VsZWN0Q29uc3RyYWludD86IENvbnN0cmFpbnRJbnB1dDtcbiAgQElucHV0KCkgc2VsZWN0T3ZlcmxhcD86IGJvb2xlYW4gfCBPdmVybGFwRnVuYztcbiAgQElucHV0KCkgc2VsZWN0QWxsb3c/OiBBbGxvd0Z1bmM7XG4gIEBJbnB1dCgpIGVkaXRhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRTdGFydEVkaXRhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnREdXJhdGlvbkVkaXRhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRDb25zdHJhaW50PzogQ29uc3RyYWludElucHV0O1xuICBASW5wdXQoKSBldmVudE92ZXJsYXA/OiBib29sZWFuIHwgT3ZlcmxhcEZ1bmM7XG4gIEBJbnB1dCgpIGV2ZW50QWxsb3c/OiBBbGxvd0Z1bmM7XG4gIEBJbnB1dCgpIGV2ZW50Q2xhc3NOYW1lPzogc3RyaW5nW10gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50Q2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgc3RyaW5nO1xuICBASW5wdXQoKSBldmVudEJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRCb3JkZXJDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRUZXh0Q29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50Q29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50cz86IEV2ZW50U291cmNlSW5wdXQ7XG4gIEBJbnB1dCgpIGV2ZW50U291cmNlcz86IEV2ZW50U291cmNlSW5wdXRbXTtcbiAgQElucHV0KCkgYWxsRGF5RGVmYXVsdD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN0YXJ0UGFyYW0/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVuZFBhcmFtPzogc3RyaW5nO1xuICBASW5wdXQoKSBsYXp5RmV0Y2hpbmc/OiBib29sZWFuO1xuICBASW5wdXQoKSBuZXh0RGF5VGhyZXNob2xkPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgZXZlbnRPcmRlcj86IHN0cmluZyB8IEFycmF5PCgoYTogRXZlbnRBcGksIGI6IEV2ZW50QXBpKSA9PiBudW1iZXIpIHwgKHN0cmluZyB8ICgoYTogRXZlbnRBcGksIGI6IEV2ZW50QXBpKSA9PiBudW1iZXIpKT47XG4gIEBJbnB1dCgpIHJlcmVuZGVyRGVsYXk/OiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBkcmFnUmV2ZXJ0RHVyYXRpb24/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyYWdTY3JvbGw/OiBib29sZWFuO1xuICBASW5wdXQoKSBsb25nUHJlc3NEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgZXZlbnRMb25nUHJlc3NEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCkgZHJvcHBhYmxlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZHJvcEFjY2VwdD86IHN0cmluZyB8ICgoZHJhZ2dhYmxlOiBhbnkpID0+IGJvb2xlYW4pO1xuICBASW5wdXQoKSBldmVudERhdGFUcmFuc2Zvcm0/OiBFdmVudElucHV0VHJhbnNmb3JtZXI7XG4gIEBJbnB1dCgpIGFsbERheU1haW50YWluRHVyYXRpb24/OiBCb29sZWFuO1xuICBASW5wdXQoKSBldmVudFJlc2l6YWJsZUZyb21TdGFydD86IEJvb2xlYW47XG4gIC8vIGNvbXBvdW5kIE9wdGlvbnNJbnB1dC4uLlxuICBASW5wdXQoKSBidXR0b25UZXh0PzogQnV0dG9uVGV4dENvbXBvdW5kSW5wdXQ7XG4gIEBJbnB1dCgpIHZpZXdzPzogeyBbdmlld0lkOiBzdHJpbmddOiBWaWV3T3B0aW9uc0lucHV0IH07XG4gIEBJbnB1dCgpIHBsdWdpbnM/OiAoUGx1Z2luRGVmIHwgc3RyaW5nKVtdO1xuICAvLyBzY2hlZHVsZXIuLi5cbiAgQElucHV0KCkgc2NoZWR1bGVyTGljZW5zZUtleT86IHN0cmluZztcbiAgQElucHV0KCkgcmVzb3VyY2VzPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUxhYmVsVGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgcmVzb3VyY2VPcmRlcj86IGFueTtcbiAgQElucHV0KCkgZmlsdGVyUmVzb3VyY2VzV2l0aEV2ZW50cz86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VUZXh0PzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUdyb3VwRmllbGQ/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlR3JvdXBUZXh0PzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUFyZWFXaWR0aD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VDb2x1bW5zPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZXNJbml0aWFsbHlFeHBhbmRlZD86IGFueTtcbiAgQElucHV0KCkgc2xvdFdpZHRoPzogYW55O1xuICBASW5wdXQoKSBkYXRlc0Fib3ZlUmVzb3VyY2VzPzogYW55O1xuXG4gIEBPdXRwdXQoKSBkYXRlc1JlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF0ZXNEZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkYXlSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHdpbmRvd1Jlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF0ZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudE1vdXNlRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50TW91c2VMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB1bnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UG9zaXRpb25lZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREcmFnU3RvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnREcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlc2l6ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlc2l6ZVN0b3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkcm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFJlY2VpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50TGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHZpZXdTa2VsZXRvblJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgdmlld1NrZWxldG9uRGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgX2Rlc3Ryb3llZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBzY2hlZHVsZXIuLi5cbiAgQE91dHB1dCgpIHJlc291cmNlUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG59XG4iXX0=